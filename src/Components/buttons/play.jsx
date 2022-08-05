import { useContext } from 'react'
import {BsFillPlayBtnFill} from 'react-icons/bs'
import { ContextMovieDataSelect } from '../../context/movieDataSelect'


export const PlayBtn=({idMovie})=>{
    const {fetchmovietrailer} = useContext(ContextMovieDataSelect)
    return (<button  onClick={()=>fetchmovietrailer(idMovie)}>
      <BsFillPlayBtnFill/>
    </button>)
}