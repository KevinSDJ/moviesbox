import Player from 'react-player'

export const Plyr_run= ({url})=>{
    if(!url)return (<div>No hay trailer</div>)
    return (<Player 
    style={{width:'100%',height:'100%'}} 
    url={url}
    pip={true}
    stopOnUnmount={true}
    controls={true}
    config={{youtube:{playerVars:{enablejsapi:true}}}}
    fallback={<div>Loading ...</div>}
    onError={(e)=> console.log(e)} />)
}
