import {Link} from 'react-router-dom'
export const BackBtn=()=>{
    return (<button>
        <Link to='/'>{"<< Back"}</Link>
    </button>)
}