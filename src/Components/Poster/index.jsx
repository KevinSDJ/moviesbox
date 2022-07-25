import {useState} from 'react'
import { useGeTrendingWeekQuery } from "../../services/api"
import {Swiper,SwiperSlide} from 'swiper/react'
import {Autoplay,Navigation,Pagination} from 'swiper';
import './../../styles/posterhom.scss'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import OvPosterCard from "../OverlayPoster";


const Poster=()=>{
    const [item,setItem]= useState(null)
    const {currentData,error,isFetching} = useGeTrendingWeekQuery()
    if(isFetching)return (<div>Loading ...</div>)
    if(error)return(<div>Ops Error 400</div>)
    if(currentData.length){
        return (<>
        {<Swiper
         onActiveIndexChange={(e)=> setItem(currentData[e.activeIndex])}
         autoplay={{
            delay:1000*10,
            disableOnInteraction:false
        }}
         centeredSlides={true}
         modules={[Autoplay,Navigation,Pagination]}
         className="mySwiperbig"
        >
            {item && <OvPosterCard title={item.title} poster={item.poster_path}/>}
            {currentData.map((e,i)=><SwiperSlide className={`swiper-slide ${i}`}  key={e.id}>
            <img className='image-poster' src={`https://image.tmdb.org/t/p/original/${e.backdrop_path}`}/>
                </SwiperSlide>)}
        </Swiper>}
        </>)
    }
   
}

export default Poster