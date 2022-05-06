import { Link } from 'react-router-dom'
import { Container, Flex, Heading, Spacer, Text } from '@chakra-ui/react'
import MobileMenu from './menu'
import Searchbutton from './buttons/searchbutton'

export default function Navbar () {
  return (<>
    <Container as={'nav'} maxW={'full'} pos={'fixed'} zIndex={20} bg='blue.400' backgroundColor={'transparent'} backdropBlur={'blur(10px)'} >
      <Flex minWidth='max-content' alignItems='center' gap='2' padding='30px calc(10vw)'>
      <Link to="/"><Heading>Cine<Text as='sub' color={'red.500'}>X</Text><Text as='strong' fontSize={'2xl'} color='#002855'>plus</Text></Heading></Link>
        <Spacer />
        <Searchbutton/>
        <MobileMenu/>
      </Flex>
    </Container>
  </>)
}
