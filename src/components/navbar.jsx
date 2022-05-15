import { Link } from 'react-router-dom'
import { Container, Flex, Heading, Spacer, Text } from '@chakra-ui/react'
import MobileMenu from './menu'
import SearchDraw from './drawers/searchdrawer'
import { useSelector } from 'react-redux'

export default function Navbar () {
  const { screensize } = useSelector(state => state.behaviorcomponent)
  return (<>
    <Container as={'nav'} maxW={'full'} pos={(screensize > 900 && 'fixed') || 'relative'} zIndex={20} backgroundColor={(screensize > 900 && 'transparent') || '#263041'}>
      <Flex minWidth='max-content' alignItems='center' gap='2' padding={(screensize > 900 && '30px calc(10vw)') || '20px 0'}>
      <Link to="/">
        <Heading color={(screensize < 900 && 'white') || 'black'} fontSize={(screensize < 900 && 'larger') || 'xx-large'}>Cine
        <Text as='sub' fontSize={(screensize < 900 && 'md') || 'xx-large'} color={ 'red.500'}>X</Text>
        <Text as='strong' fontSize={(screensize < 900 && 'md') || 'xx-large'} color={(screensize < 900 && 'white') || '#002855'}>plus</Text>
        </Heading>
        </Link>
        <Spacer />
        <SearchDraw/>
        <MobileMenu/>
      </Flex>
    </Container>
  </>)
}
