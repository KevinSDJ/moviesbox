import {Link} from 'react-router-dom'
import {TbArrowBackUp} from 'react-icons/tb'
export const BackBtn=()=>{
    return (<button style={
        {
            lineHeight:'0.5px',
            padding:'0px',
            fontSize:'1.5rem',
            border:'none',
            backgroundColor:'transparent'
            }
        }>
        <Link style={{textDecoration:'none',color:'white'}} to='/'><TbArrowBackUp/></Link>
    </button>)
}