import { Container, Stack, Box, VStack, StackDivider, Heading } from '@chakra-ui/react'
import SlideItems from '../components/slideItems'
import { useSelector } from 'react-redux'
import 'swiper/css/effect-cards'
import 'swiper/css/navigation'
import 'swiper/css'
import SlideBackground from '../components/slidebackground'

export default function Main () {
  const { data } = useSelector(state => state.apidata.topTranding)
  const { upcomming } = useSelector(state => state.apidata)
  const { popularity } = useSelector(state => state.apidata)

  return (<Container as='div' minW={'full'} padding='0' height={'auto'} bg={'#c2cfe5'} overflow='hidden'>
        <VStack
        direction={'row'}
        spacing={8}
        w={'full'}
        divider={<StackDivider borderColor='white'/>}
        align={'stretch'}
        padding={'0 0 90px 0'}
        >
           <Box pos={'relative'} display={'flex'} alignItems={'center'}>
              <SlideBackground data={upcomming.data}/>
           </Box>
           <Stack spacing={2} padding={'0 90px'} >
                <Heading fontSize={'2xl'} color='gray.600'>Trends Week</Heading>
                <SlideItems data={ data } />
           </Stack>
           <Stack spacing={2} padding={'0 90px'} >
                <Heading fontSize={'2xl'} color='gray.600'>Most Popularity</Heading>
                <SlideItems data={ popularity.data } />
           </Stack>
        </VStack>
    </Container>)
}
