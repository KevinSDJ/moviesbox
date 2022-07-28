import {lazy,Suspense, useEffect,useState} from 'react'
import BigSkeleton from '../Components/Skeletons/BigSkeleton'
import SlideSectionSkeleton from '../Components/Skeletons/SlideSectionSkeleton'
import SlidesSection from '../Components/SlideSection'
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
            <Suspense fallback={<SlideSectionSkeleton/>}>
                 <SlidesSection section={'popularity'}/>
            </Suspense>
            <Suspense fallback={<SlideSectionSkeleton/>}>
                 <SlidesSection section={'upcomming'}/>
            </Suspense>
        </div>
    </div>
    </>)
}



export default Home

