import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {lazy ,Suspense} from 'react'
import { Layout } from './Pages/Layout'
import { AnimatePresence } from 'framer-motion'
import ContextMovPlay from './context/movieDataSelect'
const Favs = lazy(()=> import('./Pages/Favs'))
const  Home = lazy(()=>import('./Pages/Home'))


const App = () => {
  return (
    <BrowserRouter >
        <AnimatePresence>
         <Routes >
            <Route path='/' element={<ContextMovPlay><Layout/></ContextMovPlay>}>
                <Route path='/'
                  element={<Suspense fallback={<div>Loading ...</div>}>
                      <Home/>
                  </Suspense>} />
                <Route path='/Mylist'
                   element={<Suspense fallback={<div>Loading ...</div>}>
                      <Favs/>
                   </Suspense>}
                   />
            </Route>
            <Route path='*' element={<div>404 Not-found</div>}/>
         </Routes>
         </AnimatePresence>
    </BrowserRouter>
  )
}
export default App
