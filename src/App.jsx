import { BrowserRouter, Routes } from 'react-router-dom'
import { AuthProvider } from './context/auth'
import { useEffect } from 'react'
import { fetchtrendingweek, fetchupcomming, fetchpopularity } from './store/actions/datamovieactions'
import { getScreenSize } from './store/slices/componentdata'
import { useDispatch } from 'react-redux'
import AnimateRoutes from './components/routes/routes'
function App () {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchpopularity())
    dispatch(fetchtrendingweek())
    dispatch(fetchupcomming())
  }, [])
  const resize = (e) => {
    dispatch(getScreenSize(window.innerWidth))
  }
  useEffect(() => {
    window.addEventListener('resize', resize)
    return () => {
      window.addEventListener('resize', resize, false)
    }
  }, [])

  return (

    <BrowserRouter>
       <AuthProvider>
       <Routes>
         <AnimateRoutes/>
       </Routes>
       </AuthProvider>
    </BrowserRouter>
  )
}

export default App
