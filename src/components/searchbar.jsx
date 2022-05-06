import { InputGroup, Input, InputRightElement, Icon } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'

export default function Searchbar () {
  const [input, setInput] = useState('')
  const handleChange = (e) => {
    setInput(e.target.value)
  }
  useEffect(() => {
    console.log(input)
  }, [input])
  return (<InputGroup
        size='md'
        background={'linear-gradient(transparent,gray)'}
        borderRadius={'4px'}
        padding={'1'}
       >
    <Input
      size={'lg'}
      fontSize={'2xl'}
      name="searchbar"
      onChange={handleChange}
      pr='4.5rem'
      type={'text'}
      placeholder='Type here ...'
      color={'white'}
      variant='flushed'
      value={input}
      _placeholder={{ color: 'rgba(255,255,255,0.7)' }}
    />
    <InputRightElement bg={'transparent'} >
      <Icon as={FaSearch} fontSize={'3xl'} color={'whiteAlpha.700'} bgColor={'transparent'} borderRadius={'4em'}/>
    </InputRightElement>
  </InputGroup>)
}
