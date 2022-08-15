import {BsFillPlayBtnFill,BsFillInfoCircleFill} from 'react-icons/bs'
import { sharingIDmovieToInfo } from '../../services/sharingIDmovieToInfo.service'
import { sharingIDmovieToTrailer } from '../../services/sharingIDmovieTotrailer.service'
import './../../styles/overlayposter.scss'

const OvPosterCard = ({id, title, poster_path ,overview, name,release_date}) => {
    return (
        <>
            <div className="overlay-poster" >
                <img className="overlay-poster-image" src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt={title} />
                <div className="overlay-circle">
                    <span>{release_date}</span>
                    <h4>{title || name}</h4>
                   
                    <button onClick={()=>{
                        sharingIDmovieToTrailer.setSubject(id)
                        }}><BsFillPlayBtnFill/></button>
                </div>
            </div>
            <div className='overlay-poster-mobile'>
                <h4>{title || name}</h4>
                <p>{overview}</p>
                <div className='overlay-mobil-btn-group'>
                    <button onClick={()=>{sharingIDmovieToTrailer.setSubject(id)}}>
                       <BsFillPlayBtnFill/>
                       <p>watch trailer</p>
                    </button>
                    <button onClick={()=>{sharingIDmovieToInfo.setSubject(id)}}>
                      <BsFillInfoCircleFill/>
                       <p>more info</p>
                    </button>
                </div>
            </div>
        </>
    )
}

export default OvPosterCard