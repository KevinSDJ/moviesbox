import React, { memo} from 'react'
import { useLocation } from 'react-router-dom'
import { AddToFavsBTN ,InfMovBtn,PlayBtn, RemoveFav} from '../buttons'
import ImageAsync from '../Img-Async'
import './../../styles/moviecard.scss'



const MovieCard =({id,title,poster,data, isFav})=>{
    let {pathname} = useLocation()
    return (<div className='movie-card'>
        <ImageAsync url={poster && `https://image.tmdb.org/t/p/w185/${poster}`|| 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/legacy-fre-image-placeholder-1642515924.png?crop=0.667xw:1.00xh;0.167xw,0&resize=640:*' } title={title?title:''}/>
        <div className='movie-card-overlay'>
            <p>{title && title}</p>
            <div className='overlay-options-card'>
                <PlayBtn key={id+'play-btn'} idMovie={id}/>
                {pathname!=='/Mylist' &&<AddToFavsBTN key={'addFavsBtn'} disabled={isFav} data={data}/> || <RemoveFav id={id}/>}
                <InfMovBtn id={id}/>
            </div>
        </div>
    </div>)
}


export default memo(MovieCard)