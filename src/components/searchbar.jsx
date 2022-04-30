import { InputGroup,Input,InputRightElement ,IconButton } from "@chakra-ui/react"
import { useEffect, useRef, useState } from "react"
import {HiSearchCircle} from 'react-icons/hi'

export default function Searchbar(){
    let [display,setDisplay]= useState(false)
    let searchref= useRef()
    let searchs=[]
    useEffect(()=>{
        console.log(display)
    },[display])
    return (<InputGroup 
        size='md'
        ref={searchref}
       >
    <Input
      size={'lg'}
      name="searchbar"
      pr='4.5rem'
      type={'text'}
      placeholder='search movie or series'
      color={'whiteAlpha.900'}
      variant='flushed' 
      onFocus={(e)=>{
          setDisplay(true)
      }}
      onBlur={(e)=>{
        setDisplay(false)
      }}
    />
    <InputRightElement bg={'transparent'} >
      <IconButton size={'sm'}  bg={'transparent'}  borderRadius={'4em'}   icon={<HiSearchCircle  fontSize={'30px'} color={'white'}/>}/>
    </InputRightElement>
  </InputGroup>)
} 