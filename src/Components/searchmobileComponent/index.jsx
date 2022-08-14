import Drawer from 'react-modern-drawer'
import {MdOutlineClose} from 'react-icons/md'
import SearchComponent from '../SearchComponent'
import { DisplaySearchsMobile } from '../displaysearchsmobile'
import './../../styles/search_mobile_component.scss'



export const SearchMobileComponent=({isOpen,closeSearch})=>{

    return (
    <Drawer
     direction='left'
     open={isOpen}
     onClose={()=>closeSearch(!isOpen)}
     size={'100vw'}
     className='drawer-search-mobile-component'
    >
    <div className='drawer-search-component-header'>
    <button onClick={()=>closeSearch(!isOpen)}>
        <MdOutlineClose/>
    </button>
    </div>
    <div className='drawer-search-component-content'>
        <h3 className='drawer-search-title'>Find what you want</h3>
        <SearchComponent icon={true}>
            <DisplaySearchsMobile/>
        </SearchComponent>
    </div>
    </Drawer>)
}