import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import { Container, Flex,Heading,Spacer,Button,ButtonGroup, Box} from "@chakra-ui/react";
import MobileMenu from './menu';


export default function Navbar() {
  const [screen,setScreen] = useState(window.innerWidth)
  useEffect(()=>{
    let resize= ()=>{
      setScreen(window.innerWidth)
    }
    window.addEventListener('resize',resize)
    return()=>{
      window.addEventListener('resize',resize,false)
    }
  },[screen])

  return (<>
    <Container as={'nav'} maxW={'full'} bg='blue.400' >
      <Flex minWidth='max-content' alignItems='center' gap='2'padding='2'>
          <Heading>Cine<sub>X</sub>+</Heading>
          {screen>800&&<Box display={'flex'} gap='2' alignItems={'center'}>
            {"|"}
          <Link to="details">details</Link>
          <Link to="/">home</Link>
          </Box>}
          
        <Spacer />
        {screen>800&& <ButtonGroup gap='2'>
          <Button colorScheme='teal'>favs</Button>
          <Button colorScheme='teal'>logout</Button>
        </ButtonGroup>}
        {screen<800&&<MobileMenu/>}
      </Flex>
      </Container>
  </>)
}