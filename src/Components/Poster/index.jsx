import { useEffect, useState } from 'react'
import OvPosterCard from './../OverlayPoster'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import BigSkeleton from '../Skeletons/BigSkeleton'
import ImageAsync from '../Img-Async'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllTrendMovies } from '../../store/slices/trendWeekMovieSlice'
import './../../styles/posterhom.scss'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'


const Poster = () => {

  const dispatch= useDispatch()
  const data = useSelector(state=> state.persReducer.trendingweek)
  const [index, setIndex] = useState(0)
  useEffect(()=>{
    data.status==='idle' && dispatch(fetchAllTrendMovies())
  },[dispatch])
  if (data?.status==='idle') return (<BigSkeleton/>)
  if (data?.status==='success') {
    return (<>
        {<Swiper
         onActiveIndexChange={(e) => {
           setIndex(e.activeIndex)
         }}
        autoplay={{
          delay: Number(10000 * 8),
          disableOnInteraction: false,
          pauseOnMouseEnter: false
        }}
         centeredSlides={true}
         modules={[Autoplay]}
         className="mySwiperbig"

        >
            <OvPosterCard title={data?.movies?.results[index].title} poster={data?.movies?.results[index].poster_path} id={data?.movies?.results[index].id} />
            {data?.movies?.results.map((e, i) => <SwiperSlide  className={`swiper-slide-big ${i}`} key={e.title} >
                <ImageAsync title={e.title} classname={'image-poster'} url={`https://image.tmdb.org/t/p/original/${e.backdrop_path}`}/>
                </SwiperSlide>)}
        </Swiper>}
        </>)
  }
}

export default Poster
