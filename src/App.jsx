import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {lazy ,Suspense, useEffect} from 'react'
import { Layout } from './Pages/Layout'
import { AnimatePresence } from 'framer-motion'

import { useDispatch, useSelector } from 'react-redux'
import { fetchAllPopMov } from './store/slices/popularityMovieSlice'
import { fetchAllTrendMovies } from './store/slices/trendWeekMovieSlice'
import { fetchAllUpcMovies } from './store/slices/upcommingMovieSlice'
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
         <Routes >
            <Route path='/' element={<Layout/>}>
                <Route path='/'
                  element={<Suspense fallback={<div>Loading ...</div>}>
                      <Home/>
                  </Suspense>} />
                <Route path='/Mylist'
                   element={<Suspense fallback={<div>Loading ...</div>}>
                      <Favs/>
                   </Suspense>}
                   />
            </Route>
            <Route path='*' element={<div>404 Not-found</div>}/>
         </Routes>
         </AnimatePresence>
    </BrowserRouter>
  )
}
export default App
