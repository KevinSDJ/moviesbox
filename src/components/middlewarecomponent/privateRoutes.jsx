import { Navigate, Outlet, useLocation } from 'react-router-dom'
import useAuth from '../../context/hooks/useAuth'

export default function Private () {
  const { user } = useAuth()
  const { session } = user
  const location = useLocation()
  /* return (<>
    {session ? <Outlet/> : <Navigate to="auth" state={{ from: location }} replace />}
    </>
  ) */
  return (<>
   <Outlet/>
  </>)
}
