import { Outlet } from 'react-router-dom'
import MovieInfo from '../Components/movie_info'
import  Navbar  from '../Components/Navbar/navbar'
import PlayerMedia from '../Components/videoplr'



export const Layout = () => {
  return (<>
     <Navbar/>
     <MovieInfo/>
      <Outlet/>
      <div>
        footer
      </div>
    </>)
}
