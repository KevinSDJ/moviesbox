import { Container } from '@chakra-ui/react' 
import { Outlet } from 'react-router-dom'
import useAuth  from '../../context/hooks/useAuth'
import Footer from '../footer'
import Navbar from './../navbar.jsx'






export default function Home (){
    let data = useAuth()
    console.log(data)
    return (<Container as='div' minW={'full'}  padding={'0'}  color='#262626' height={'auto'}>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </Container>)
}