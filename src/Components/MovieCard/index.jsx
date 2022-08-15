import React, { memo} from 'react'
import { useLocation } from 'react-router-dom'
import { AdToFavsBTN ,InfMovBtn,PlayBtn, RemoveFav} from '../buttons'
import ImageAsync from '../Img-Async'
import './../../styles/moviecard.scss'



const MovieCard =({id,title,poster,data, isFav})=>{
    let {pathname} = useLocation()
    return (<div className='movie-card'>
        <ImageAsync url={`https://image.tmdb.org/t/p/w185/${poster}`} title={title}/>
        <div className='movie-card-overlay'>
            <p>{title}</p>
            <div className='overlay-options-card'>
                <PlayBtn key={id+'play-btn'} idMovie={id}/>
                {pathname!=='/Mylist' &&<AdToFavsBTN key={'addFavsBtn'} disabled={isFav} data={data}/> || <RemoveFav id={id}/>}
                <InfMovBtn id={id}/>
            </div>
        </div>
    </div>)
}


export default memo(MovieCard)