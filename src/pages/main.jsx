import React, { lazy, Suspense } from 'react'
import { Container, Stack, Box, VStack, Heading } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import 'swiper/css/effect-cards'
import 'swiper/css/navigation'
import 'swiper/css'
import LoadingMoviesItems from '../components/loadings/loadingItems'
import SkeletonImageBackground from '../components/loadings/skeletonSlidebackground'
const SlideItems = lazy(() => import('../components/slideItems'))
const SlideBackground = lazy(() => import('../components/slidebackground'))
export default function Main () {
  const { topTranding } = useSelector(state => state.apidata)
  const { upcomming } = useSelector(state => state.apidata)
  const { popularity } = useSelector(state => state.apidata)
  const { screensize } = useSelector(state => state.behaviorcomponent)
  console.log('se renderizo')
  return (<Container minW={'full'} margin={'0'} padding={'0'} bg={(screensize > 900 && '#c2cfe5') || '#2b2d42'}>
        <VStack
        direction={'row'}
        spacing={8}
        w={'full'}
        align={'stretch'}
        padding={'0 0 90px 0'}
        >
           <Box pos={'relative'} display={'flex'} alignItems={'center'}>
              {upcomming.status === 'loading' && <SkeletonImageBackground/>}
              {upcomming.status === 'idle' && <Suspense fallback={<SkeletonImageBackground/>}>
                   <SlideBackground data={upcomming.data}/>
                 </Suspense>}
           </Box>
           <Stack spacing={2} padding={(screensize > 900 && '0 90px') || '0 10px'} >
                <Heading fontSize={(screensize < 900 && 'sm') || '2xl'} color={(screensize > 900 && 'gray.600') || '#edf2f4'}>Trends Week</Heading>
                {topTranding.status === 'loading' && <LoadingMoviesItems/>}
                {topTranding.status === 'idle' && <Suspense fallback={<LoadingMoviesItems/>}>
                     <SlideItems data={ topTranding.data } />
                   </Suspense>}
           </Stack>
           <Stack spacing={2} padding={(screensize > 900 && '0 90px') || '0 10px'}>
                <Heading fontSize={(screensize < 900 && 'sm') || '2xl'} color={(screensize > 900 && 'gray.600') || '#edf2f4'}>Most Popularity</Heading>
                {popularity.status === 'loading' && <LoadingMoviesItems/>}
                {popularity.status === 'idle' && <Suspense fallback={<LoadingMoviesItems/>}>
                     <SlideItems data={ popularity.data } />
                   </Suspense>}
           </Stack>

        </VStack>
    </Container>)
}
React.memo(Main)
