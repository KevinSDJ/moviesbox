import { lazy, Suspense } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectFade } from 'swiper'
import SkeletonImageBackground from './loadings/skeletonSlidebackground'
import 'swiper/css/effect-fade'

const CarrItemSlide = lazy(() => import('./datamovie/boxslideimage'))
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
           data.map(e => <SwiperSlide key={e.id + 'image'}>
             <Suspense fallback={<SkeletonImageBackground/>}>
             <CarrItemSlide
             id={e.id}
             backdroppath={e.backdrop_path}
             originaltitle={e.original_title}
             releasedate={e.release_date}
             voteaverage={e.vote_average}
             votecount={e.vote_count}
             posterpath={e.poster_path}
             key={e.id}
             />
             </Suspense>
          </SwiperSlide>)
      }
    </Swiper>
  </>)
}
