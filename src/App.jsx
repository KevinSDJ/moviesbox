import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './Pages/Layout'
import Home from './Pages/Home'
import ContextMovPlay from './context/movieDataSelect'
import { Favs } from './Pages/Favs'
import { AnimatePresence } from 'framer-motion'

const App = () => {
  return (
    <BrowserRouter >
        <AnimatePresence>
         <Routes >
            <Route path='/' element={<ContextMovPlay><Layout/></ContextMovPlay>}>
                <Route path='/' element={<Home/>}/>
                <Route path='/Mylist' element={<Favs/>}/>
            </Route>
            <Route path='*' element={<div>404 Not-found</div>}/>
         </Routes>
         </AnimatePresence>
    </BrowserRouter>
  )
}
export default App
