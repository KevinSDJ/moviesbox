import { useLocation } from 'react-router-dom'
import { HiMenuAlt3 } from 'react-icons/hi'
import './../../styles/navbar.scss'
import { useEffect } from 'react'

export const Navbar = () => {
    let { pathname } = useLocation()
    /*useEffect(()=>{
        let viewscroll=(e)=>{
            console.log(document.body.getBoundingClientRect().top)
        }
        window.addEventListener('scroll',viewscroll)
        return ()=>{window.removeEventListener('scroll',viewscroll)}
    },[])
    */
    return (<nav className='nav'>
        <div className='innerNav'>
            <div className='logo-nav'>
                <p>Cinex</p>
                <sub>x</sub>
                <p>plus</p>
            </div>
            <div>
                {pathname != '/pref' && <button>search</button>}
                <i><HiMenuAlt3 /></i>
            </div>
        </div>
    </nav>)
}