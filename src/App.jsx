import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './components/containers/home';
import Private from './components/middlewarecomponent/privateRoutes'
import { AuthProvider } from './context/auth';
import AuthPage from './pages/auth';
import Main from './pages/main';
import "swiper/css";

function App() {

  return (
    
    <BrowserRouter>
       <AuthProvider>
       <Routes>
         <Route path='/auth' element={<AuthPage/>} />
         <Route path='/' element={<Private/>}>
            <Route path='/' element={<Home/>}>
              <Route path='/' element={<Main/>}/>
              <Route path='details' element={<div>Detaisl</div>}/>
            </Route>
         </Route>
       </Routes>
       </AuthProvider>
    </BrowserRouter>
  )
}

export default App
