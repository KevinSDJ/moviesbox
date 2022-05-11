import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, EffectCards } from 'swiper'
import 'swiper/css/effect-cards'
import 'swiper/css/navigation'
import 'swiper/css'
import MovieCard from './moviecard'

export default function SlideItems ({ data }) {
  const formatnumber = (number) => {
    if (String(number).replace(/[$.]/g, '').split('').length <= 1) {
      const str = String(number).replace(/[$.]/g, '') + '0'
      return Number(str)
    } else {
      return Number(String(number).replace(/[$.]/g, ''))
    }
  }
  return (<>
    <Swiper navigation={true}
      slidesPerView={'auto'}
      spaceBetween={30}
      modules={[Navigation, EffectCards]}
      className="mySwiper"
    >
      {data.map(e => <SwiperSlide style={{ width: '200px' }} key={e.id}>
            <MovieCard
              id={e.id}
              image={e.poster_path}
              title={e.original_title}
              date={e.release_date}
              voteaverage={formatnumber(e.vote_average)}
            />
        </SwiperSlide>)
      }
    </Swiper>
  </>)
}
