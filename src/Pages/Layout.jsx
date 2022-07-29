import { Outlet } from 'react-router-dom'
import { Navbar } from '../Components/Navbar/navbar'
import PlayerMedia from '../Components/videoplr'

export const Layout = () => {
  return (<>
     <Navbar/>
      <Outlet/>
      <div>
        footer
      </div>
    </>)
}
