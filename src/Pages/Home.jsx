import Poster from '../Components/Poster'
import SlidesSection from '../Components/SlideSection'
import {useGeTrendingWeekQuery} from './../services/api'
import './../styles/home.scss'


const Home =()=>{
    const {currentData,error,isFetching} = useGeTrendingWeekQuery()
    return (<>
    <div className='HomeCont'>
        <Poster/>
        <hr/>
        <SlidesSection/>
        <hr/>
        <SlidesSection/>
        <hr/>
        <SlidesSection/>
    </div>
    </>)
}

export default Home

