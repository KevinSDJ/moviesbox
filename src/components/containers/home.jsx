import { Container } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import Footer from '../footer'
import Navbar from './../navbar.jsx'

export default function Home () {
  return (<Container as='div' minW={'full'} overflowY='hidden' padding={'0'} height={'auto'}>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </Container>)
}
