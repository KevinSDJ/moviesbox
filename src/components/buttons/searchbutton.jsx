import { Button, Text, Icon } from '@chakra-ui/react'
import { FaSearch } from 'react-icons/fa'
import { useSelector } from 'react-redux'

export default function Searchbutton ({ cb }) {
  const { screensize } = useSelector(state => state.behaviorcomponent)
  return <Button
  variant={'solid'}
  onClick={cb}
  borderRadius='4em'
  display={'flex'}
  alignContent={'center'}
  colorScheme='blackAlpha'
  justifyContent={'center'}
  color={'white'}
  gap={'0 5px'}
  padding={(screensize < 900 && '0') || 'auto'}
  >
  <Icon as={FaSearch}/>
  <Text fontSize={'smaller'} hidden={(screensize < 900 && true) || false}>search</Text>
  </Button>
}
