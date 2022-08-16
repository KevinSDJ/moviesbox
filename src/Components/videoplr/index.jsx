import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { MdOutlineClose } from 'react-icons/md'
import YoutubePlayer  from '../plyr'
import { sharingIDmovieToTrailer } from '../../services/sharingIDmovieTotrailer.service'
import 'react-modern-drawer/dist/index.css'
import './../../styles/plyr_component.scss'






const PlayerMedia = () => {
  const [idMov, setMov] = useState(null)
  let subscribe = sharingIDmovieToTrailer.getSubject()
  let timeout
  useEffect(()=>{
    clearTimeout(timeout)
    subscribe.subscribe(data =>{
      if(data && !idMov){
        timeout= setTimeout(()=>setMov(data),50)
      }
    })
    return ()=>{clearTimeout(timeout)}
  },[])
  return (
    <AnimatePresence>
      {idMov && <motion.div
      className='video-content'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
       <div className='video-content-inner'>

            <button onClick={() => {setMov(!idMov) && sharingIDmovieToTrailer.setSubject('')}}>
              <MdOutlineClose />
            </button>
            <YoutubePlayer id={idMov}/>
        </div>
    </motion.div>}
    </AnimatePresence>)
}


export default PlayerMedia
