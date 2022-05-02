
import { Link } from 'react-router-dom'
import { Container, Flex, Heading, Spacer, Button, ButtonGroup, Box, Avatar } from '@chakra-ui/react'
import MobileMenu from './menu'
import { useSelector } from 'react-redux'

export default function Navbar () {
  const { screensize } = useSelector(state => state.behaviorcomponent)
  return (<>
    <Container as={'nav'} maxW={'full'} bg='blue.400' >
      <Flex minWidth='max-content' alignItems='center' gap='2' padding='10px'>
        <Heading>Cine<sub>X</sub>+</Heading>
        {screensize > 800 && <Box display={'flex'} gap='2' alignItems={'center'}>
          {'|'}
          <Link to="details">details</Link>
          <Link to="/">home</Link>
        </Box>}
        <Spacer />
        {screensize > 800 && <ButtonGroup gap='2'>
          <Button colorScheme='teal'>favs</Button>
          <Button colorScheme='teal'>sign in</Button>
          <Avatar />
        </ButtonGroup>}
        {screensize < 800 && <MobileMenu />}
      </Flex>
    </Container>
  </>)
}
