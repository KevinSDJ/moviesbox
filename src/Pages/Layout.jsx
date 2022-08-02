import { Outlet } from 'react-router-dom'
import { Navbar } from '../Components/Navbar/navbar'
import useModal from '../hooks/modal_video'

export const Layout = () => {
  return (<>
     <Navbar/>
      <Outlet/>
      <div>
        footer
      </div>
    </>)
}
