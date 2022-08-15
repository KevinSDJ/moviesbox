import { memo } from "react"
import { useGetDetailsMovieQuery } from "../../services/api"
import { PlayBtn } from "../buttons/play"
import ImageAsync from "../Img-Async"
import {AiTwotoneStar} from 'react-icons/ai'

const MovieInfoDisplay=({idMovie})=>{
    let maxpoint= Array.from({length:10},(v)=>v)
    const { currentData,error,isFetching } =  useGetDetailsMovieQuery(idMovie,{skip:!Boolean(idMovie)}) 
    if(isFetching || !currentData) return (<div style={{height:'70vh',backgroundColor:"white"}}>
    <h1>Loading ...</h1>
</div>)
    {console.log(currentData)}
    let {
        backdrop_path,
        title ,name,
        poster_path,
        releases,
        overview,
        genres,
        production_countries,
        release_date,
        runtime,
        tagline,
        vote_average
    } = currentData
    return (<div className="movie-info-content" >
        <div className='movie-info-image-background' style={{backgroundImage:`url(https://image.tmdb.org/t/p/w300/${backdrop_path})`}}/>
        <div className="movie-info-content-overlay">
           <ImageAsync url={`https://image.tmdb.org/t/p/w154/${poster_path}`}/>
           <div className='movie-data'>
              <h5 className="title">{title  || name}</h5>
              <ul className="clasif-and-duration">
                 <span className="certification">{releases?.countries.find(e=>e.iso_3166_1==='US')?.certification || '?' }</span>
                 
                 <li>({production_countries[0].iso_3166_1})</li>
 
                 <li className="release-data">{release_date}</li>

                 
                 <li>{(runtime/60).toPrecision(3).split('.')[0]}h{(runtime/60).toPrecision(3).split('.')[1]!==''&& (runtime/60).toPrecision(3).split('.')[1]+'m'}</li>
                 <li>{genres.map((e,i)=> <span key={e.name}>{e.name}{i<genres.length-1&& <i>&</i>}</span>)}</li>
              </ul>
              <span className="puntuation">
                 {maxpoint.map((e,i)=><button className="start-icon-point"  key={'star'+i} style={{color:`${i<Math.floor(vote_average)&&'yellow' || 'gray'}`}}><AiTwotoneStar/></button>)}
              </span>
              <p className="tagline">{tagline}</p>
              <h6 className="Overview-title">Overview</h6>
              <p className="Overview">{overview}</p>
               
           </div>
        </div>
    </div>)
}

export default memo(MovieInfoDisplay)