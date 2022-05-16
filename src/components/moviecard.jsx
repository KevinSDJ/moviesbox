import { Box, Skeleton, Text, CircularProgress, IconButton, Image, Stack, CircularProgressLabel } from '@chakra-ui/react'
import gsap from 'gsap'
import { useRef } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { MdOutlineBookmarkAdd } from 'react-icons/md'
import { FiMoreVertical } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function MovieCard ({ title, id, image, date, voteaverage }) {
  const { screensize } = useSelector(state => state.behaviorcomponent)
  const boxref = useRef()
  const boxbuttonsoptions = useRef()
  const mouseOver = (e) => {
    if (screensize > 900) {
      gsap.to(boxref.current, {
        height: '40%'
      })
      gsap.to(boxbuttonsoptions.current, {
        opacity: 1
      })
    }
  }
  const mouseLeave = (e) => {
    if (screensize > 900) {
      gsap.to(boxref.current, {
        height: '20%'
      })
      gsap.to(boxbuttonsoptions.current, {
        opacity: 0
      })
    }
  }
  return (
    <Box
    as='div'
    padding='0'
    width={`${(screensize < 900 && '8rem') || '15rem'}`}
    boxShadow='base'
    bg='transparent'
    pos='relative'
    >
            <Image
            h={'full'}
            fallback={<Skeleton h={'full'} padding={'0'} w={'100%'}/>}
            src={`https://image.tmdb.org/t/p/original/${image}`}
            borderRadius={'1em'}
            />
            <Box ref={boxref} onMouseOver={mouseOver} onMouseLeave={mouseLeave} bg='#2b2d42' w={(screensize < 900 && '100%') || 'full'} height={(screensize < 900 && 'auto') || '20%'} pos={'absolute'} bottom='0' left={'0'} padding='2' borderTopLeftRadius={'2xl'} borderTopRightRadius={'2xl'} >
              <Text textAlign={'center'} fontSize={(screensize < 900 && 'xx-small') || 'md'} fontWeight='600' color={'white'}>{title}</Text>
              <Text color={'gray'} fontSize={(screensize < 900 && 'xx-small') || 'auto'} >{date}</Text>
              {screensize > 900 && <CircularProgress value={voteaverage} pos='absolute' color={(voteaverage >= 70 && '#3aba07') || (voteaverage > 40 && voteaverage < 70 && '#e8e10e') || '#fc4e03'} bgColor={'#22333b'} borderRadius='4em' right={'5px'} top='-40px' >
                  <CircularProgressLabel color='white'>{voteaverage + '%'}</CircularProgressLabel>
              </CircularProgress>}
              {screensize > 900 && <Stack direction={'row'} ref={boxbuttonsoptions} spacing={3} opacity={0} padding={'10px 0'}>
                  <IconButton aria-label='add_to_favourite' variant={'outline'} colorScheme={'pink'} icon={<AiOutlineHeart />}/>
                  <IconButton arial-label='add_to_watch_list' colorScheme={'yellow'} variant={'outline'} icon={<MdOutlineBookmarkAdd/>} />
                  <IconButton arial-label='add_to_watch_list' as={Link} to={`movie/${id}`} variant={'outline'} colorScheme={'whiteAlpha'} icon={<FiMoreVertical/>} />
              </Stack>}
          </Box>
    </Box>
  )
}
