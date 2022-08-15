import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { MdOutlineClose } from 'react-icons/md'
import { Plyr_run } from '../plyr'
import { sharingIDmovieToTrailer } from '../../services/sharingIDmovieTotrailer.service'
import 'react-modern-drawer/dist/index.css'
import './../../styles/plyr_component.scss'





const PlayerMedia = () => {
  const [idMov, setMov] = useState(null)
  let subscribe = sharingIDmovieToTrailer.getSubject()
  useEffect(() => {
    subscribe.subscribe((data) => {
      if (data) {
        setMov(data)
      } else {
        setMov('')
      }
    })
  }, [])

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
          
          <Plyr_run id={idMov} />
        </div>
    </motion.div>}
    </AnimatePresence>)
}


export default PlayerMedia
