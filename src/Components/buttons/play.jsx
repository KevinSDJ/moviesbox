import { useContext } from 'react'
import {BsFillPlayBtnFill} from 'react-icons/bs'
import { ContextMovieDataSelect } from '../../context/movieDataSelect'
import './../../styles/playbtn.scss'

export const PlayBtn=({idMovie})=>{
    const {fetchmovietrailer} = useContext(ContextMovieDataSelect)
    return (<button  className='play-btn' onClick={()=>fetchmovietrailer(idMovie)}>
      <BsFillPlayBtnFill  fontSize={30}/>
    </button>)
}