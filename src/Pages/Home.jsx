import Poster from '../Components/Poster'
import BigSkeleton from '../Components/Skeletons/BigSkeleton'
import SlidesSection from '../Components/SlideSection'
import {useGeTrendingWeekQuery} from './../services/api'
import './../styles/home.scss'


const Home =()=>{
    const {currentData,error,isFetching} = useGeTrendingWeekQuery()
    return (<>
    <div className='HomeCont'>
        {!currentData && <BigSkeleton/> || <Poster/>}
        <div className='sections-container'>
           <SlidesSection section={'popularity'}/>
           <SlidesSection section={'upcomming'}/>
        </div>
    </div>
    </>)
}

export default Home

