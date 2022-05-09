import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectFade } from 'swiper'
import { Badge, Image, Box, IconButton, Divider, Grid, GridItem, Text, Heading, VStack, Skeleton, Icon } from '@chakra-ui/react'
import Rating from './datamovie/rating'
import { FaPlay } from 'react-icons/fa'
import SkeletonImageBackground from './loadings/skeletonSlidebackground'
import 'swiper/css/effect-fade'
export default function SlideBackground ({ data }) {
  const count = []
  for (let i = 0; i < 1; i++) {
    count.push(i)
  }
  return (<>
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      effect={'fade'}
      autoplay={{
        delay: 10000
      }}
      modules={[Autoplay, Pagination, EffectFade]}
      className="mySwiper"
    >{
        !data || data.length < 1
          ? count.map(e => <SwiperSlide key={e + 'keleton'}>
            <SkeletonImageBackground />
          </SwiperSlide>)
          : data.map(e => <SwiperSlide key={e.id + 'image'}>
            <Box as={'section'} height={'800px'} pos={'relative'} boxShadow={'10px 10px 10px #c2cfe5 inset, -10px -10px 10px #c2cfe5 inset'} bg={'radial-gradient(transparent 30%,#c2cfe5 90%)'} >
              <Image
                objectFit={'fill'}
                objectPosition={'top'}
                height={'800px'}
                pos={'absolute'}
                fallback={<Skeleton h={'800px'} />}
                w={'100%'}
                zIndex={-1}
                src={`https://image.tmdb.org/t/p/original/${e.backdrop_path}`} />
              <Grid templateColumns='2fr 1fr' paddingTop={'10%'} justifyItems={'center'} alignItems={'center'} templateRows={'1fr'} w={'100%'} height={'100%'} >
                <GridItem width={'90%'}>
                  <VStack
                    spacing={4}
                    align='stretch'>
                    <Heading as='h1' color="white" textShadow={'0 0 10px black'} fontSize={'calc(5vw)'} fontWeight={600}>{e.original_title}</Heading>
                    <Rating votes={Number(String(e.vote_average).split('')[0])} count={e.vote_count} />
                    <Badge variant='outline' fontSize={'2xl'} color={'blackAlpha.700'} w={'max-content'}>
                      {e.release_date}
                    </Badge>
                  </VStack>
                </GridItem>
                <GridItem bg='transparent' >
                  <Box padding={'calc(10vw)'} pos={'relative'} display={'flex'} alignItems={'center'} bgColor={'blackAlpha.100'} borderRadius='90%' border={'1px solid white'}>
                    <Image
                      position={'absolute'}
                      left={'-100px'}
                      borderRadius={'2em'}
                      fallback={<Skeleton/>}
                      src={`https://image.tmdb.org/t/p/original/${e.poster_path}`}
                      objectFit={'fill'}
                      objectPosition={'top'}
                      height={'300px'}
                      w={'200px'}
                    />
                    <VStack align={'stretch'} spacing={1}>
                      <Heading size={'2xl'} padding={0}>
                        watch
                      </Heading>
                      <Divider />
                      <Text fontSize={'3xl'} color={'white'} textShadow={'0 0 5px black'}>
                        Trailer<IconButton variant={'unstyled'} borderRadius={'90%'} padding={'1.5'} aria-label='play trailer' icon={<Icon fontSize={'3xl'} as={FaPlay} color={'red.400'} /> }/>
                      </Text>
                    </VStack>
                  </Box>
                </GridItem>
              </Grid>
            </Box>
          </SwiperSlide>)
      }
    </Swiper>
  </>)
}
