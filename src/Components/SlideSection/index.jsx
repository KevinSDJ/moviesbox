import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import MovieCard from '../MovieCard'
import { useGetPopularityQuery, useGetUpcommingQuery } from '../../services/api'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './../../styles/slideSection.scss'
import SlideSectionSkeleton from '../Skeletons/SlideSectionSkeleton'
const sect = {
  popularity: {
    method: useGetPopularityQuery,
    title: 'The most popular now'
  },
  upcomming: {
    method: useGetUpcommingQuery,
    title: 'Upcoming releases'
  }
}
const SlidesSection = ({ section }) => {
  const { currentData, error, isFetching } = sect[section].method()
  console.log("slide section ")
  if (isFetching) return (<SlideSectionSkeleton/>)
  if (currentData) {
    return (
                <Swiper
                slidesPerView={'auto'}
                navigation={true}
                parallax={true}
                modules={[Navigation, Pagination]}
                spaceBetween={30}
                className="mySwiper"

                >
                    <h5 className="section-title" >{sect[section].title}</h5>
                    {currentData.map((e, i) => <SwiperSlide className='swiper-slide-section' key={e.id + e.title} >
                        <MovieCard title={e.title} poster={e.poster_path}/>
                        </SwiperSlide>)}
                </Swiper>
    )
  }
}

export default React.memo(SlidesSection)
