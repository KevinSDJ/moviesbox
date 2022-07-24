import {Swiper,SwiperSlide} from 'swiper/react'
import {Navigation,Mousewheel,Pagination} from 'swiper'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./../../styles/slideSection.scss"

const SlidesSection=()=>{
    let fakeArray= Array.from({length:20},(v,i)=>i)
    return (<div>
        <h5>Title</h5>
        <Swiper
        slidesPerView={'auto'}
        navigation={true}
        modules={[Navigation,Mousewheel]}
        spaceBetween={10}
        className="mySwiper"
        >
            {fakeArray.map(e=><SwiperSlide className='swiper-slide ' key={e}><img src='https://via.placeholder.com/200/92c952'/></SwiperSlide>)}
        </Swiper>
    </div>)
}

export default SlidesSection