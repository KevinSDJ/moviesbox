import { lazy ,Suspense} from 'react'
import { Outlet } from 'react-router-dom'
import  Navbar  from '../Components/Navbar/navbar'
import Footer from './../Components/footer'

const MovieInfo=lazy(()=>import('../Components/movie_info'))
const PlayerMedia =lazy(()=>import('../Components/videoplr'))


export const Layout = () => {
  return (<>
     <Navbar/>
     <Suspense fallback={<></>}>
        <MovieInfo/>
        <PlayerMedia/>
     </Suspense>
     <Outlet/>
      <Footer/>
    </>)
}
