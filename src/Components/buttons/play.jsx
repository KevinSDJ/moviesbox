import {BsFillPlayBtnFill} from 'react-icons/bs'
import { sharingIDmovieToTrailer } from '../../services/sharingIDmovieTotrailer.service'
import './../../styles/playbtn.scss'


export const PlayBtn=({idMovie,text=null})=>{
    return (<button  className='play-btn' onClick={()=>sharingIDmovieToTrailer.setSubject(idMovie)}>
      <BsFillPlayBtnFill  fontSize={30}/> {text&& <p>{text}</p>}
    </button>)
}