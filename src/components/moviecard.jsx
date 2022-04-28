import {Box,Text,CircularProgress,Image ,CircularProgressLabel} from '@chakra-ui/react'
import gsap from 'gsap'
import {useEffect,useRef} from 'react'



export default function MovieCard(){
    let boxref= useRef()
    useEffect(()=>{
        gsap.to(boxref.current,{
            y:50
        })
        boxref.current.addEventListener('mouseover',()=>{
            gsap.to(boxref.current,{
                y:0
            })
        })
        boxref.current.addEventListener('mouseleave',()=>{
            gsap.to(boxref.current,{
                y:50
            })
        })

    },[])
    return (
    <Box 
    as='div' 
    padding='0' 
    boxShadow='base' 
    bg='white' 
    pos='relative'
    >
            <Image
            minH={'300px'}
            src='https://www.ubuy.com/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNjFGbStOK05uY0wuX0FDX1NMMTAwOF8uanBn.jpg'
            />
            <Box  ref={boxref} bg='gray.300' minW={'full'} height='28' pos={'absolute'} bottom='0' left={'0'} padding='2' borderTopLeftRadius={'2xl'} borderTopRightRadius={'2xl'} >
              <Text color={'gray.800'}>Movies</Text>
              <CircularProgress value={40} pos='absolute' color='red' bgColor={'gray.300'} borderRadius='4em' right={'5px'} top='-30px'>
                  <CircularProgressLabel>40%</CircularProgressLabel>
              </CircularProgress>
          </Box>
    </Box>)
}