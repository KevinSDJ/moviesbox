import { useLocation } from 'react-router-dom'
import {Link} from 'react-router-dom'
import Logo from '../Logo'
import {SearchButton} from './../buttons'
import './../../styles/navbar.scss'
import { memo } from 'react'
import { useScrollDown } from '../../hooks/useScrollDown'
import { MobileMenu } from '../buttons/mobilemenu'



const Navbar = () => {
    let { pathname } = useLocation()
    const {steps} = useScrollDown()
    return (<nav className={`nav ${steps<-100 && "isScroll"}`} >
        <div className='innerNav'>
            <Logo/>
            <div className='nav-section'>
                {pathname === '/' && <SearchButton/>}
                <div className='nav-link' >
                   <li className={pathname==='/Mylist'&& 'active-link-nav'||null}><Link to='/Mylist'>My list</Link></li>
                </div>
                <MobileMenu/>
            </div>
        </div>
    </nav>)
}
export default memo(Navbar)