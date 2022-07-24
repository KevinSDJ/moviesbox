import { useGeTrendingWeekQuery } from "../../services/api"
import './../../styles/posterhom.scss'

const Poster=()=>{
    const {currentData,error,isFetching} = useGeTrendingWeekQuery()
    if(isFetching)return (<div>Loading ...</div>)
    if(error)return(<div>Ops Error 400</div>)
    if(currentData.length){
        return (<>
        {<div className="poster-content">
        <img className='image-poster' src={`https://image.tmdb.org/t/p/original/${currentData[Math.round(Math.random()* currentData.length)].backdrop_path}`}/>
        
        </div>}
        </>)
    }
   
}

export default Poster