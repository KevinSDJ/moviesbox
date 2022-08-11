import { useContext } from 'react'
import {BsFillPlayBtnFill} from 'react-icons/bs'
import { ContextMovieDataSelect } from '../../context/movieDataSelect'
import './../../styles/overlayposter.scss'

const OvPosterCard = ({id, title, poster_path ,overview, name}) => {
    const {fetchmovietrailer} = useContext(ContextMovieDataSelect)
    
    return (
        <>
            <div className="overlay-poster" >
                <img className="overlay-poster-image" src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt={title} />
                <div className="overlay-circle">
                    <p>{title}</p>
                    <button onClick={()=>{
                        fetchmovietrailer(id)
                        }}><BsFillPlayBtnFill/></button>
                </div>
            </div>
            <div className='overlay-poster-mobile'>
                <h4>{title || name}</h4>
                <p>{overview}</p>
                <div>
                    <button>watch trailer</button>
                    <button>more info</button>
                </div>
            </div>
        </>
    )
}

export default OvPosterCard