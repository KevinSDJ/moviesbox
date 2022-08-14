import { useEffect, useState } from 'react'
import Drawer from 'react-modern-drawer'
import { sharingIDmovieToInfo } from '../../services/sharingIDmovieToInfo.service'
import {MdOutlineClose} from 'react-icons/md'
import 'react-modern-drawer/dist/index.css'
import './../../styles/movie_info.scss'
import MovieInfoDisplay  from './movieInfoDisplay'
import { useLazyChange } from '../../hooks/useDelayChange'




const MovieInfo = () => {
    let subscribe$= sharingIDmovieToInfo.getSubject() 
    const [open,setOpen]= useState(false)

    useEffect(()=>{
        subscribe$.subscribe(data=>{
            if(data && !open){
                setOpen(data)
            }
        })
    },[])
    return (
    <>
    <Drawer
                direction='bottom'
                open={open}
                onClose={()=>setOpen(!open)}
                size={'100vh'}
                className='movie-drawer-info'
            >
                <div className='movie-info-inner-draw' >
                   <button className='movie-info-draw-close' onClick={()=>{setOpen(false) && sharingIDmovieToInfo.setSubject('')}}>
                      <MdOutlineClose/>
                   </button>
                  {open && <MovieInfoDisplay idMovie={open}/>}
                </div>
            </Drawer>
    </>)
}

export default MovieInfo