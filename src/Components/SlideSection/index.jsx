import {Swiper,SwiperSlide} from 'swiper/react'
import {Navigation,Pagination,Virtual} from 'swiper'
import MovieCard from '../MovieCard';
import { useGetPopularityQuery, useGetUpcommingQuery } from '../../services/api';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./../../styles/slideSection.scss"


const SlidesSection=({section})=>{
    if(section==='popularity'){
        let {currentData,error,isFetching}= useGetPopularityQuery()
        if(isFetching)return (<div>Loading</div>)
        if(currentData.length){
            return (
                <Swiper
                slidesPerView={'auto'}
                navigation={true}
                pagination={{type:'progressbar'}}
                parallax={true}
                modules={[Navigation,Pagination]}
                spaceBetween={30}
                className="mySwiper"

                >
                    <h5>Title</h5>
                    {currentData.map((e,i)=><SwiperSlide className='swiper-slide-section' key={e.id+e.title}  >
                        <MovieCard title={e.title} poster={e.poster_path}/>
                        </SwiperSlide>)}
                </Swiper>
            )
        }
    }
    if(section==='upcomming'){
        let {currentData,error,isFetching}= useGetUpcommingQuery()
        if(isFetching)return (<div>Loading</div>)
        if(currentData.length){
            return (     
                <Swiper
                slidesPerView={'auto'}
                navigation={true}
                pagination={{type:'progressbar'}}
                modules={[Navigation,Pagination,Virtual]}
                spaceBetween={30}
                className="mySwiper"
                >
                    <h5>Title</h5>
                    {currentData.map((e,i)=><SwiperSlide className='swiper-slide-section' key={e.id} >
                        <MovieCard title={e.title} poster={e.poster_path}/>
                        </SwiperSlide>)}
                </Swiper>
            )
        }
    }
}

export default SlidesSection