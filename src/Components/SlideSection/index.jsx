import React from 'react'
import { isFavourite,sect} from './../../util'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import { useSelector } from 'react-redux'
import MovieCard from '../MovieCard'
import { useResize } from '../../hooks/useResize'
import SlideSectionSkeleton from '../Skeletons/SlideSectionSkeleton'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './../../styles/slideSection.scss'



const SlidesSection = ({ section }) => {
  const {screen}= useResize()
  const data = useSelector(sect[section].data())
  const favs= useSelector(sect['favs'].data())
  if (data?.status === 'idle' || data.status === 'loading') return (<SlideSectionSkeleton />)
  if (data?.status === 'success') {
    return (
      <Swiper
        slidesPerView={'auto'}
        navigation={true}
        modules={[Navigation, Pagination]}
        spaceBetween={screen >700 && 30 || 10}
        className="mySwiper"

      >
        <h5 className="section-title" >{sect[section].title}</h5>
        {data.movies?.results?.map((e, i) => <SwiperSlide className='swiper-slide-section' key={e.id + e.title} >
          <MovieCard id={e.id} title={e.title} poster={e.poster_path} data={e} isFav={isFavourite(favs,e?.id)} />
        </SwiperSlide>)}
      </Swiper>
    )
  }
}

export default SlidesSection
