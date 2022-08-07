import Drawer from 'react-modern-drawer'
import { useContext } from 'react'
import { ContextMovieDataSelect } from '../../context/movieDataSelect'
import 'react-modern-drawer/dist/index.css'
import './../../styles/plyr_component.scss'
import {Plyr_run } from '../plyr'


const PlayerMedia = () => {
  let {src,toggleDrawer} = useContext(ContextMovieDataSelect)
    return (
      <Drawer
      
      open={Boolean(src)}
      onClose={toggleDrawer}
      direction={'bottom'}
      size={'100vh'}
      style={{backgroundColor:'rgba(0,0,0,0.7)'}}
      className='video-content'
      >
        <div className='video-content-inner'>   
            <div className='video-content-inner'>
            <button onClick={()=>toggleDrawer(!src)}>x</button> 
             {src && <Plyr_run  url={src}/>}
            </div>
        </div>
      </Drawer>)
  }
 

export default PlayerMedia
