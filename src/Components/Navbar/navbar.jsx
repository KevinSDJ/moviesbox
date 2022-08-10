import { useLocation } from 'react-router-dom'
import { HiMenuAlt3 } from 'react-icons/hi'
import {Link} from 'react-router-dom'
import Logo from '../Logo'
import {SearchButton} from './../buttons'
import './../../styles/navbar.scss'
import { memo, useEffect, useRef } from 'react'


const Navbar = () => {
    let { pathname } = useLocation()
    const nav= document.querySelector('.nav')
    useEffect(()=>{
        let scroll =(e)=>{
            if(document.body.getBoundingClientRect().top<-100){
                nav?.classList.add('isScroll')
            }else{
                nav?.classList.remove('isScroll')
            }
            
        }
        window.addEventListener('scroll',scroll)
        return ()=>{window.removeEventListener('scroll',scroll)}
    },[])
    return (<nav className='nav'>
        <div className='innerNav'>
            <Logo/>
            <div className='nav-section'>
                {pathname === '/' && <SearchButton/>}
                <div className='nav-link' >
                   <li className={pathname==='/Mylist'&& 'active-link-nav'||null}><Link to='/Mylist'>My list</Link></li>
                   <li>About</li>
                </div>
                <i className='mobile-button' ><HiMenuAlt3 /></i>
            </div>
        </div>
    </nav>)
}
export default memo(Navbar)