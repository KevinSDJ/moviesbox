import { Outlet } from 'react-router-dom'
import { Navbar } from '../Components/Navbar/navbar' 

export const Layout=()=>{
    return (<>
     <Navbar/>
     <main>
       <Outlet/>
     </main>
    </>)
}