import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, EffectCards } from 'swiper'
import MovieCard from './moviecard'
import nexId from 'react-id-generator'
import { formatnumber } from './../utilities/formatnumberating'
import { useSelector } from 'react-redux'
export default function SlideItems ({ data }) {
  const { screensize } = useSelector(state => state.behaviorcomponent)
  return (<>
    <Swiper
      navigation={Boolean(screensize > 900)}
      slidesPerView={'auto'}
      spaceBetween={(screensize < 900 && 10) || 30}
      modules={[Navigation, EffectCards]}
      className="mySwiper"
    >
      {data.map((e, index) => <SwiperSlide style={{ maxWidth: `${(screensize < 900 && '8rem') || '15rem'}`, boxSizing: 'border-box' }} key={nexId(e.original_title)}>
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
