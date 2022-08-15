import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {lazy ,Suspense, useEffect} from 'react'
import { Layout } from './Pages/Layout'
import { AnimatePresence } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllPopMov } from './store/slices/popularityMovieSlice'
import { fetchAllTrendMovies } from './store/slices/trendWeekMovieSlice'
import { fetchAllUpcMovies } from './store/slices/upcommingMovieSlice'
import BigSkeleton from './Components/Skeletons/BigSkeleton'
const Favs = lazy(()=> import('./Pages/Favs'))
const  Home = lazy(()=>import('./Pages/Home'))


const App = () => {
  const dispatch= useDispatch()
  const {trendingweek}= useSelector(state=> state.persReducer)
  useEffect(()=>{
    trendingweek.status === 'idle' && dispatch(fetchAllTrendMovies())
    .unwrap()
    .then((success)=>{
      dispatch(fetchAllPopMov())
      .unwrap()
      .then((success)=>{
        dispatch(fetchAllUpcMovies())
      })
    })
  },[])
  
  return (
    <BrowserRouter >
        <AnimatePresence>
        <Suspense fallback={<BigSkeleton/>}>
         <Routes >
            <Route path='/' element={<Layout/>}>
                <Route path='/'
                  element={<Home/>} />
                <Route path='/Mylist'
                   element={<Favs/>} />
            </Route>
            <Route path='*' element={<div>404 Not-found</div>}/>
         </Routes>
         </Suspense>
         </AnimatePresence>
    </BrowserRouter>
  )
}
export default App
