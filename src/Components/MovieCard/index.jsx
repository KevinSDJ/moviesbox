import { memo} from 'react'
import {BsFillPlayBtnFill,BsFillInfoCircleFill} from 'react-icons/bs'
import { AdToFavsBTN } from '../buttons'
import ImageAsync from '../Img-Async'
import './../../styles/moviecard.scss'



const MovieCard =({title,poster,data, isFav})=>{
    return (<div className='movie-card'>
        <ImageAsync url={`https://image.tmdb.org/t/p/original/${poster}`} title={title}/>
        <div className='movie-card-overlay'>
            <p>{title}</p>
            <div className='overlay-options-card'>
                <button><BsFillPlayBtnFill/></button>
                <AdToFavsBTN key={'addFavsBtn'} disabled={isFav} data={data}/>
                <button><BsFillInfoCircleFill/></button>
            </div>
        </div>
    </div>)
}

export default memo(MovieCard)