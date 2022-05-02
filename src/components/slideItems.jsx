import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, EffectCards } from 'swiper'
import CardSkeleton from './loadings/skeletonCard'
import 'swiper/css/effect-cards'
import 'swiper/css/navigation'
import 'swiper/css'
import MovieCard from './moviecard'

export default function SlideItems ({ data }) {
  const count = []
  for (let i = 0; i < 10; i++) {
    count.push(i)
  }
  return (<>
      <Swiper navigation={true} slidesPerView={'auto'} spaceBetween={30} modules={[Navigation, EffectCards]} className="mySwiper">
          {!data || !data.length
            ? count.map(e => <SwiperSlide style={{ width: '250px' }} key={e}><CardSkeleton/></SwiperSlide>)
            : data.map(e => <SwiperSlide style={{ width: '250px' }} key={e.id}><MovieCard
          id={e.id}
          image={e.poster_path }
          title={e.original_title}
          date={e.release_date}
          voteaverage={Number(String(e.vote_average).replace(/[$.]/g, ''))}
          /></SwiperSlide>)
          }
      </Swiper>
    </>)
}
