import { useContext } from 'react'
import {AnimatePresence,motion} from 'framer-motion'
import { ContextMovieDataSelect } from '../../context/movieDataSelect'
import { Plyr_run } from '../plyr'
import 'react-modern-drawer/dist/index.css'
import './../../styles/plyr_component.scss'


const MyModal=({children,open})=>{
  if(open){
    return (<motion.div 
    className='video-content'
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    >
    {children}
    </motion.div>
    )
  }
  return (<></>)
}


const PlayerMedia = () => {
  let { src, toggleDrawer } = useContext(ContextMovieDataSelect)
  return (
    <AnimatePresence>
      {src && <MyModal
      open={Boolean(src)}
      >
          <div className='video-content-inner'>
            <button onClick={() => toggleDrawer(!src)}>x</button>
            {src && <Plyr_run url={src} />}
          </div>
      </MyModal>}
    </AnimatePresence>
  )
}


export default PlayerMedia
