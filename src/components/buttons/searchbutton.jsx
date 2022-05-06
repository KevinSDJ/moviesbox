import { Button } from '@chakra-ui/react'
import { FaSearch } from 'react-icons/fa'

export default function Searchbutton () {
  return <Button leftIcon={<FaSearch/>} variant={'solid'} borderRadius='4em' colorScheme='blackAlpha' color={'white'} >search</Button>
}
