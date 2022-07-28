import { useEffect } from 'react'
import {BsFillPlayBtnFill,BsFillInfoCircleFill} from 'react-icons/bs'
import {MdOutlinePlaylistAdd} from 'react-icons/md'
import ImageAsync from '../Img-Async'
import './../../styles/moviecard.scss'



const MovieCard =({title,poster})=>{
    return (<div className='movie-card'>
        <ImageAsync url={`https://image.tmdb.org/t/p/original/${poster}`} title={title}/>
        <div className='movie-card-overlay'>
            <p>{title}</p>
            <div className='overlay-options-card'>
                <button><BsFillPlayBtnFill/></button>
                <button><MdOutlinePlaylistAdd/></button>
                <button><BsFillInfoCircleFill/></button>
            </div>
        </div>
    </div>)
}

export default MovieCard