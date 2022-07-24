import { Outlet } from 'react-router-dom'
import { Navbar } from '../Components/Navbar/navbar' 

export const Layout=()=>{
    return (<>
     <Navbar/>
     {console.log("main")}
     <main>
       <Outlet/>
     </main>
    </>)
}