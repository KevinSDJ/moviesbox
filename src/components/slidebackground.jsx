import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper'
import { Image } from '@chakra-ui/react'
import SkeletonImageBackground from './loadings/skeletonSlidebackground'
export default function SlideBackground ({ data }) {
  const count = []
  for (let i = 0; i < 10; i++) {
    count.push(i)
  }
  return (<>
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"

        >{
          !data || data.length < 1
            ? count.map(e => <SwiperSlide key={e + 'keleton'}>
            <SkeletonImageBackground/>
          </SwiperSlide>)
            : data.map(e => <SwiperSlide key={e.id + 'image'}> <Image
          objectFit={'fill'}
          objectPosition={'top'}
          height={'800px'}
          w={'100%'}
          src={`https://image.tmdb.org/t/p/original/${e.backdrop_path}`}/></SwiperSlide>)
        }
        </Swiper>
    </>)
}
