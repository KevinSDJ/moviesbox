import ImageAsync from "../Img-Async"
import './index.scss'


export const LitlePreview=({id,poster,title})=>{
    return (<div className="movie-card-list" >
        <ImageAsync title={title} url={poster && `https://image.tmdb.org/t/p/original/${poster}` || 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/legacy-fre-image-placeholder-1642515924.png?crop=0.667xw:1.00xh;0.167xw,0&resize=640:*' } classname='img-list-item'/>
        <p>{title}</p>
        <span>
            <button>add</button>
            <button>info</button>
        </span>
    </div>)
}