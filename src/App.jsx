import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/containers/home'
import Private from './components/middlewarecomponent/privateRoutes'
import { AuthProvider } from './context/auth'
import AuthPage from './pages/auth'
import { useEffect } from 'react'
import { fetchtrendingweek, fetchupcomming } from './store/actions/datamovieactions'
import { getScreenSize } from './store/slices/componentdata'
import { useDispatch } from 'react-redux'
import Main from './pages/main'
import 'swiper/css'

function App () {
  const dispatch = useDispatch()

  const resize = (e) => {
    dispatch(getScreenSize(window.innerWidth))
  }
  useEffect(() => {
    dispatch(fetchtrendingweek())
    dispatch(fetchupcomming())
    dispatch(getScreenSize(window.innerWidth))
    window.addEventListener('resize', resize)
    return () => {
      window.addEventListener('resize', resize, false)
    }
  }, [])
  return (

    <BrowserRouter>
       <AuthProvider>
       <Routes>
         <Route path='/auth' element={<AuthPage/>} />
         <Route path='/' element={<Private/>}>
            <Route path='/' element={<Home/>}>
              <Route path='/' element={<Main/>}/>
              <Route path='details' element={<div>Detaisl</div>}/>
            </Route>
         </Route>
       </Routes>
       </AuthProvider>
    </BrowserRouter>
  )
}

export default App
