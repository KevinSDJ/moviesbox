import {useEffect, useLayoutEffect, useState} from 'react'
import { useGeTrendingWeekQuery } from "../../services/api"
import OvPosterCard from "./../OverlayPoster";
import {Swiper,SwiperSlide} from 'swiper/react'
import {Autoplay,Navigation,Pagination,Virtual} from 'swiper';
import './../../styles/posterhom.scss'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { current } from '@reduxjs/toolkit';


const Poster=()=>{
    const [item,setItem]= useState(null)
    const {currentData,error,isFetching} = useGeTrendingWeekQuery()
    if(isFetching)return (<div>Loading ...</div>)
    if(error)return(<div>Ops Error 400</div>)
    if(currentData.length){
        return (<>
        {<Swiper
         onActiveIndexChange={(e)=>{
            setItem(currentData[e.activeIndex])
        }}
        autoplay={{
            delay:1000*50,
            disableOnInteraction:false,
            pauseOnMouseEnter:false,
            waitForTransition:true
        }}
         centeredSlides={true}
         modules={[Autoplay,Navigation,Pagination,Virtual]}
         className="mySwiperbig"
         virtual
        >
            {item && <OvPosterCard title={item.title} poster={item.poster_path}/> || <OvPosterCard title={currentData[0].title} poster={currentData[0].poster_path}/>}
            {currentData.map((e,i)=><SwiperSlide className={`swiper-slide ${i}`}  key={e.id} virtualIndex={i}>
            <img className='image-poster' src={`https://image.tmdb.org/t/p/original/${e.backdrop_path}`}/>
                </SwiperSlide>)}
        </Swiper>}
        </>)
    }
   
}

export default Poster