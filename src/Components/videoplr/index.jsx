import ReactDOM from 'react-dom'
import Plyr from 'plyr-react'
import { useGetVideoTrailerQuery } from './../../services/api'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import './../../styles/plyr_component.scss'
import 'plyr-react/plyr.css'
import { useContext } from 'react'
import { ContextMovieDataSelect } from '../../context/movieDataSelect'

const PlayerMedia = ({isOpen,toggleDrawer}) => {
  const {mvId} = useContext(ContextMovieDataSelect)
  if(mvId){
    const {currentData,error,isFetching} =useGetVideoTrailerQuery(mvId) 
    return (
      <Drawer
      open={isOpen}
      onClose={toggleDrawer}
      direction={'bottom'}
      size={'100vh'}
      style={{backgroundColor:'rgba(0,0,0,0.7)'}}
      className='video-content'
      >
        <div className='video-content-inner'>   
            <div className='video-content-inner'>
            <button onClick={()=>toggleDrawer()}>x</button> 
               Hola perra
               {currentData?.length && <Plyr  source={{type:'video',sources:[{src:currentData[0].key,provider:'youtube'}]}} />}
            </div>
        </div>
      </Drawer>)
  }
  return (
  <Drawer
  open={isOpen}
  onClose={toggleDrawer}
  direction={'bottom'}
  size={'100vh'}
  style={{backgroundColor:'rgba(0,0,0,0.7)'}}
  className='video-content'
  >
    <div className='video-content-inner'>   
        <div className='video-content-inner'>
        <button onClick={()=>toggleDrawer()}>x</button> 
           Hola perra
        </div>
    </div>
  </Drawer>)
}

export default PlayerMedia
