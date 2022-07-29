import { useState } from 'react'
import { useGeTrendingWeekQuery } from '../../services/api'
import OvPosterCard from './../OverlayPoster'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Virtual } from 'swiper'
import './../../styles/posterhom.scss'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import BigSkeleton from '../Skeletons/BigSkeleton'
import ImageAsync from '../Img-Async'

const Poster = () => {
  const [index, setIndex] = useState(0)
  const { currentData, error, isFetching } = useGeTrendingWeekQuery()
  if (isFetching) return (<BigSkeleton/>)
  if (currentData.length) {
    return (<>
        {<Swiper
         onActiveIndexChange={(e) => {
           setIndex(e.activeIndex)
         }}
        autoplay={{
          delay: 1000 * 50,
          disableOnInteraction: false,
          pauseOnMouseEnter: false
        }}
         centeredSlides={true}
         modules={[Autoplay]}
         className="mySwiperbig"

        >

            <OvPosterCard title={currentData[index].title} poster={currentData[index].poster_path} id={currentData[index].id} />
            {currentData.map((e, i) => <SwiperSlide className={`swiper-slide-big ${i}`} key={e.title} >
                <ImageAsync title={e.title} classname={'image-poster'} url={`https://image.tmdb.org/t/p/original/${e.backdrop_path}`}/>
                </SwiperSlide>)}
        </Swiper>}
        </>)
  }
}

export default Poster
