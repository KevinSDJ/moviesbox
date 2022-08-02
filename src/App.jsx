import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './Pages/Layout'
import Home from './Pages/Home'
import ContextMovPlay from './context/movieDataSelect'

const App = () => {
  return (
    <BrowserRouter >
         <Routes >
            <Route path='/' element={<ContextMovPlay><Layout/></ContextMovPlay>}>
                <Route path='/' element={<Home/>}/>
                <Route path='page2' element={<div>Page 2</div>}/>
            </Route>
            <Route path='*' element={<div>404 Not-found</div>}/>
         </Routes>
    </BrowserRouter>
  )
}
export default App
