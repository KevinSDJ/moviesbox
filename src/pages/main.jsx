import { Container, Text, Box, VStack, StackDivider } from '@chakra-ui/react'
import SlideItems from '../components/slideItems'
import { useSelector } from 'react-redux'
import 'swiper/css/effect-cards'
import 'swiper/css/navigation'
import 'swiper/css'
import SlideBackground from '../components/slidebackground'

export default function Main () {
  const { data } = useSelector(state => state.apidata.topTranding)
  const { upcomming } = useSelector(state => state.apidata)

  return (<Container as='div' minW={'full'} padding='0' height={'auto'} bg={'#c2cfe5'} overflow='hidden'>
        <VStack
        direction={'row'}
        spacing={8}
        w={'full'}
        divider={<StackDivider borderColor='black'/>}
        align={'stretch'}
        padding={'90px 60px'}
        >
           <Box >
                <Text fontSize={'2xl'}>Trends</Text>
                <SlideItems data={ data } />
           </Box>
           <Box pos={'relative'} display={'flex'} alignItems={'center'}>
              <SlideBackground data={upcomming.data}/>
           </Box>
        </VStack>
    </Container>)
}
