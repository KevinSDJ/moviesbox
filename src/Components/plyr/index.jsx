import {memo} from 'react'
import Youtube from 'react-youtube'
import { useGetVideoTrailerQuery } from '../../services/api'
import './index.scss'

const Plyr_run= ({id=null})=>{
    const {data,error,isFetching} = useGetVideoTrailerQuery(id,{skip:!Boolean(id)})
    console.log("player render")
    if(!id){
        return (<></>)
    }
    if(!data?.length)return (<div>No hay trailer</div>)
    return (
    <iframe
    className='video-youtube-iframe' src={'https://www.youtube.com/embed/'+data[0].key}
    frameborder="0" 
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;fullscreen" 
    allowfullscreen="allowfullscreen"
    mozallowfullscreen="mozallowfullscreen" 
    msallowfullscreen="msallowfullscreen" 
    oallowfullscreen="oallowfullscreen" 
    webkitallowfullscreen="webkitallowfullscreen"
     />)
}

export default memo(Plyr_run)