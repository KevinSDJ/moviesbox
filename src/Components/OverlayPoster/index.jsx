import { useContext } from 'react'
import {useSwiper} from 'swiper/react'
import {BsFillPlayBtnFill} from 'react-icons/bs'
import { ContextMovieDataSelect } from '../../context/movieDataSelect'
import './../../styles/overlayposter.scss'

const OvPosterCard = ({id, title, poster }) => {
    const {fetchmovietrailer} = useContext(ContextMovieDataSelect)
    const swiper= useSwiper()
    return (
        <>
            <div className="overlay-poster" >
                <img className="overlay-poster-image" src={`https://image.tmdb.org/t/p/original/${poster}`} alt={title} />
                <div className="overlay-circle">
                    <p>{title}</p>
                    <button onClick={()=>{
                        fetchmovietrailer(id,swiper)
                        }}><BsFillPlayBtnFill/></button>
                </div>
            </div>
            <div className='overlay-poster-mobile'>
                <h4>{title}</h4>
                <button>dsdasd</button>
            </div>
        </>
    )
}

export default OvPosterCard