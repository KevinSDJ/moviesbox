import { Navigate,Outlet,useLocation } from 'react-router-dom'
import useAuth  from '../../context/hooks/useAuth'





export default function Private(){
    let {user}= useAuth()
    let {session} = user
    let location= useLocation()
    return (<>
    {session?<Outlet/>: <Navigate to="auth" state={{from:location}} replace />}
    </>
    )   
}