import { Routes, Route } from 'react-router-dom'
import AuthPage from '../../pages/auth'
import Private from './privateRoutes'
import Home from './../containers/home'
import Main from './../../pagemain'
import MovieDetail from './../../pages/movie'

export default function AnimateRoutes () {
  return (<Routes>
        <Route path='/auth' element={<AuthPage/>} />
        <Route path='/' element={<Private/>}>
           <Route path='/' element={<Home/>}>
             <Route path='/' element={<Main/>}/>
             <Route path='movie/:id' element={<MovieDetail/>}/>
             <Route path='searchs' element={<div>search jaja</div>}/>
           </Route>
        </Route>
        </Routes>)
}
