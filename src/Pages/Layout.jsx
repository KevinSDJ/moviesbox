import { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import  Navbar  from '../Components/Navbar/navbar'
import PlayerMedia from '../Components/videoplr'
import { ContextMovieDataSelect } from '../context/movieDataSelect'


export const Layout = () => {
  return (<>
     <Navbar/>
     <PlayerMedia />
      <Outlet/>
      <div>
        footer
      </div>
    </>)
}
