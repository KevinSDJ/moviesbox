import React, { memo} from 'react'
import {BsFillInfoCircleFill} from 'react-icons/bs'
import { AdToFavsBTN ,InfMovBtn,PlayBtn} from '../buttons'
import ImageAsync from '../Img-Async'
import './../../styles/moviecard.scss'



const MovieCard =({id,title,poster,data, isFav})=>{
    return (<div className='movie-card'>
        <ImageAsync url={`https://image.tmdb.org/t/p/original/${poster}`} title={title}/>
        <div className='movie-card-overlay'>
            <p>{title}</p>
            <div className='overlay-options-card'>
                <PlayBtn key={id+'play-btn'} idMovie={id}/>
                <AdToFavsBTN key={'addFavsBtn'} disabled={isFav} data={data}/>
                <InfMovBtn id={id}/>
            </div>
        </div>
    </div>)
}


export default memo(MovieCard)