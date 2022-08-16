import {memo} from 'react'
import Youtube from 'react-youtube'
import { useGetVideoTrailerQuery } from '../../services/api'
import './index.scss'

const Plyr_run= ({id=null})=>{
    const {data,error,isFetching} = useGetVideoTrailerQuery(id,{skip:!Boolean(id)})
    
    if(!id){
        return (<></>)
    }
    if(!data?.length)return (<div>No hay trailer</div>)
    
    function filtred (array){
        let newArray= array.filter(e=> e.type==='Trailer' )
        console.log(newArray)
        return newArray[newArray.length>3 && 2 ||0]?.key
    }
    return (
    <iframe
    className='video-youtube-iframe' src={'https://www.youtube-nocookie.com/embed/'+filtred(data)}
    frameBorder="0" 
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;fullscreen" 
    allowFullScreen
    mozallowfullscreen="mozallowfullscreen" 
    msallowfullscreen="msallowfullscreen" 
    oallowfullscreen="oallowfullscreen" 
    webkitallowfullscreen="webkitallowfullscreen"
     />)
}

export default memo(Plyr_run)