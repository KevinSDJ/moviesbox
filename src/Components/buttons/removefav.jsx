import { useDispatch } from 'react-redux'
import {MdRemoveCircle} from 'react-icons/md'
import { removeFav } from '../../store/slices/favlist.slice'
import './../../styles/playbtn.scss'


export const RemoveFav=({id,classname=null})=>{
    const dispatch = useDispatch()
    const onRemoveFav =()=>{
        dispatch(removeFav(id))
    }
    return (
    <button  className={classname || 'play-btn'} onClick={onRemoveFav} >
        <MdRemoveCircle  fontSize={30}/> 
    </button>
    )
}