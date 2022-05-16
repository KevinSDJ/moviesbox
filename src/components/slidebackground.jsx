'use strict'
import { lazy, Suspense } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Virtual, EffectFade, Pagination } from 'swiper'
import SkeletonImageBackground from './loadings/skeletonSlidebackground'
import 'swiper/css/virtual'
import 'swiper/css/pagination'
const CarrItemSlide = lazy(() => import('./datamovie/boxslideimage'))
export default function SlideBackground ({ data }) {
  const count = []
  for (let i = 0; i < 1; i++) {
    count.push(i)
  }

  return (<>
    <Swiper
      centeredSlides={true}
      autoplay={{
        delay: 4000 * 3,
        disableOnInteraction: false,
        waitForTransition: true
      }}

      pagination
      modules={[Autoplay, Virtual, EffectFade, Pagination]}
      className="mySwiper"
      virtual
    >{
           data.filter(e => e?.backdrop_path !== null || e.poster_path !== null).map((e, index) => <SwiperSlide virtualIndex={index} key={e.id} >
             <Suspense fallback={<SkeletonImageBackground/>}>
             <CarrItemSlide
             id={e.id}
             backdroppath={e.backdrop_path}
             originaltitle={e.original_title}
             releasedate={e.release_date}
             voteaverage={e.vote_average}
             votecount={e.vote_count}
             posterpath={e.poster_path}
             />
             </Suspense>
          </SwiperSlide>)
      }
    </Swiper>
  </>)
}
