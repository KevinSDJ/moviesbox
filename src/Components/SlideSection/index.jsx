import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import { useDispatch, useSelector } from 'react-redux'
import {fetchAllPopMov } from '../../store/slices/popularityMovieSlice'
import {fetchAllUpcMovies} from '../../store/slices/upcommingMovieSlice'
import MovieCard from '../MovieCard'
import SlideSectionSkeleton from '../Skeletons/SlideSectionSkeleton'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './../../styles/slideSection.scss'




export const sect = {
  popularity: {
    title: 'The most popular now',
    data:()=>useSelector(state=>state.persReducer.popularity)
  },
  upcomming: {
    title: 'Upcoming releases',
    data:()=>useSelector(state=> state.persReducer.upcommingmovies)
  },
  favs:{
    data:()=>useSelector(state=> state.persReducer.Favs.movies)
  }
}
export const isFavourite=(title)=>{
  return sect.favs.data().filter(it=>it.title===title).length > 0
}
const SlidesSection = ({ section }) => {
  const dispatch= useDispatch()
  const data = sect[section].data()
  useEffect(()=>{
    data.status === 'idle' && section === 'popularity' && dispatch(fetchAllPopMov())
    data.status === 'idle' && section === 'upcomming' && dispatch(fetchAllUpcMovies())
  },[])
  if (data?.status==='idle' || data.status==='loading') return (<SlideSectionSkeleton/>)
  if (data?.status === 'success') {
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
                    {data.movies?.results?.map((e, i) => <SwiperSlide className='swiper-slide-section' key={e.id + e.title} >
                        <MovieCard id={e.id} title={e.title} poster={e.poster_path} data={e} isFav={isFavourite(e.title)}/>
                        </SwiperSlide>)}
                </Swiper>
    )
  }
}

export default SlidesSection
