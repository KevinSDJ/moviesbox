import { Container } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import Footer from '../footer'
import Navbar from './../navbar.jsx'

export default function Home () {
  return (<Container minW={'full'} height={'100vh'} overflow={'auto'} scrollBehavior={'smooth'} sx={{ '&::-webkit-scrollbar': { display: 'none' } }} padding={'0'}>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </Container>)
}
