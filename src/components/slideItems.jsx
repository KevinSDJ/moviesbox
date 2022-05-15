import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, EffectCards } from 'swiper'
import MovieCard from './moviecard'
import nexId from 'react-id-generator'
import { formatnumber } from './../utilities/formatnumberating'
export default function SlideItems ({ data }) {
  return (<>
    <Swiper
      navigation={true}
      slidesPerView={'auto'}
      spaceBetween={30}
      modules={[Navigation, EffectCards]}
      className="mySwiper"
    >
      {data.map((e, index) => <SwiperSlide style={{ maxWidth: 'calc(15rem)', boxSizing: 'border-box' }} key={nexId(e.original_title)}>
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
