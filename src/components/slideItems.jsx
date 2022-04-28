import {Swiper,SwiperSlide} from 'swiper/react'
import { Navigation } from "swiper";
import CardSkeleton from './loadings/skeletonCard';
import { EffectCards } from 'swiper';
import 'swiper/css/effect-cards'
import "swiper/css/navigation";
import 'swiper/css'
import MovieCard from './moviecard';





export default function SlideItems(){
    let count=[]
    for(let i=0;i<10;i++){
        count.push(i)
    }

    return (<>
      <Swiper navigation={true}   slidesPerView={"auto"} spaceBetween={30}  modules={[Navigation,EffectCards]} className="mySwiper">
          {count.map(e=><SwiperSlide  style={{width:'250px'}} key={e}><MovieCard/></SwiperSlide>)}
      </Swiper>
    </>)
}