import { useLocation } from 'react-router-dom'
import { HiMenuAlt3 } from 'react-icons/hi'
import './../../styles/navbar.scss'
import Logo from '../Logo'
import SearchComponent from '../SearchComponent'

export const Navbar = () => {
    let { pathname } = useLocation()
    return (<nav className='nav'>
        <div className='innerNav'>
            <Logo/>
            <div className='nav-section'>
                {pathname != '/pref' && <SearchComponent/>}
                <div className='nav-link' >
                   <li>My list</li>
                   <li>About</li>
                </div>
                <i className='mobile-button' ><HiMenuAlt3 /></i>
            </div>
        </div>
    </nav>)
}