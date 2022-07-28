import {lazy,Suspense, useEffect,useState} from 'react'
import BigSkeleton from '../Components/Skeletons/BigSkeleton'
import SlidesSection from '../Components/SlideSection'
import {useGeTrendingWeekQuery} from './../services/api'
import './../styles/home.scss'
const Poster = lazy(()=> import('./../Components/Poster'))




const Home =()=>{
    return (<>
    <div className='HomeCont'
    >
        {<Suspense fallback={<BigSkeleton/>}>
            <Poster/>
        </Suspense>}
        <div className='sections-container'>
           <SlidesSection section={'popularity'}/>
           <SlidesSection section={'upcomming'}/>
        </div>
    </div>
    </>)
}



export default Home

