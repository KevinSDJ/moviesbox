import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, EffectCards } from 'swiper'
import CardSkeleton from './loadings/skeletonCard'
import 'swiper/css/effect-cards'
import 'swiper/css/navigation'
import 'swiper/css'
import MovieCard from './moviecard'

export default function SlideItems ({ data }) {
  const count = []
  const formatnumber = (number) => {
    if (String(number).replace(/[$.]/g, '').split('').length <= 1) {
      const str = String(number).replace(/[$.]/g, '') + '0'
      console.log(String(number).replace(/[$.]/g, '').split('').length)
      return Number(str)
    } else {
      return Number(String(number).replace(/[$.]/g, ''))
    }
  }
  for (let i = 0; i < 8; i++) {
    count.push(i)
  }
  return (<>
      <Swiper navigation={true}
       slidesPerView={'auto'}
       spaceBetween={30}
       modules={[Navigation, EffectCards]}
       className="mySwiper"
       >
          {!data || !data.length
            ? count.map(e => <SwiperSlide style={{ width: '250px' }} key={e}><CardSkeleton/></SwiperSlide>)
            : data.map(e => <SwiperSlide style={{ width: '250px' }} key={e.id}><MovieCard
          id={e.id}
          image={e.poster_path }
          title={e.original_title}
          date={e.release_date}
          voteaverage={formatnumber(e.vote_average)}
          /></SwiperSlide>)
          }
      </Swiper>
    </>)
}
