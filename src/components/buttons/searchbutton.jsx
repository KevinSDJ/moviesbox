import { Button } from '@chakra-ui/react'
import { FaSearch } from 'react-icons/fa'

export default function Searchbutton ({ cb }) {
  return <Button leftIcon={<FaSearch/>} variant={'solid'} onClick={cb} borderRadius='4em' colorScheme='blackAlpha' color={'white'} >search</Button>
}
