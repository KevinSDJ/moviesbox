import { InputGroup, Input, InputRightElement, Icon } from '@chakra-ui/react'
import { searchmovie } from './../store/actions/datamovieactions'
import { clearsearch } from './../store/slices/datamovies'
import { FaSearch } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { useRef } from 'react'

export default function Searchbar () {
  const dispatch = useDispatch()
  let timeout
  const inputref = useRef()

  const onkey = () => {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      if (inputref.current.value !== '') {
        dispatch(searchmovie(inputref.current.value.replace(/[$'']/g, '%20%')))
      } else {
        dispatch(clearsearch())
      }
      clearTimeout(timeout)
    }, 1000)
  }

  return (<InputGroup
    size='md'
    bgColor={'gray.600'}
    borderRadius={'4px'}
    padding={'2'}
  >
    <Input
      autoComplete='off'
      size={'lg'}
      fontSize={'2xl'}
      name="searchbar"
      ref={inputref}
      onKeyDown={onkey}
      pr='4.5rem'
      type={'text'}
      placeholder='Type here ...'
      color={'white'}
      variant='unstyled'
      _placeholder={{ color: 'rgba(255,255,255,0.7)' }}
    />
    <InputRightElement bg={'transparent'} height={'full'}>
      <Icon as={FaSearch} fontSize={'3xl'} color={'whiteAlpha.700'} bgColor={'transparent'} borderRadius={'4em'} />
    </InputRightElement>
  </InputGroup>)
}
