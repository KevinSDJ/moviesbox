import { useEffect } from 'react'
import {BsFillPlayBtnFill,BsFillInfoCircleFill} from 'react-icons/bs'
import {MdOutlinePlaylistAdd} from 'react-icons/md'
import './../../styles/moviecard.scss'



const MovieCard =({title,poster})=>{
    useEffect(()=>{
        console.log("se cargo")
    })
    return (<div className='movie-card'>
        <img src={`https://image.tmdb.org/t/p/original/${poster}`}/>
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