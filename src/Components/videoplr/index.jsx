import Drawer from 'react-modern-drawer'
import { useContext, useRef } from 'react'
import { ContextMovieDataSelect } from '../../context/movieDataSelect'
import 'react-modern-drawer/dist/index.css'
import './../../styles/plyr_component.scss'
import {Plyr_run } from '../plyr'


const PlayerMedia = () => {
  let {src,clearSrc:toggleDrawer} = useContext(ContextMovieDataSelect)
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
            <button onClick={()=>toggleDrawer()}>x</button> 
             {src && <Plyr_run url={src.url}/>}
            </div>
        </div>
      </Drawer>)
  }
 

export default PlayerMedia
