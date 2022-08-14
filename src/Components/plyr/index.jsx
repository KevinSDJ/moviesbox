import Youtube from 'react-youtube'
import { useGetVideoTrailerQuery } from '../../services/api'
import './index.scss'

export const Plyr_run= ({id})=>{
    const {data,error,isFetching} = useGetVideoTrailerQuery(id)
    if(!data?.length)return (<div>No hay trailer</div>)
    return (<Youtube
        className='video-youtube-component'
        videoId={data[0].key}
        iframeClassName='video-youtube-iframe'
        onError={(e)=>console.lot(e)}
        loading={'lazy'}
        opts={{
            playerVars:{autoplay:0,enablejsapi:0,showinfo:0,origin:window.location.host},
            }}
    />)
}