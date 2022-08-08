import {motion} from 'framer-motion'
import { lazy, Suspense } from 'react'
import BigSkeleton from '../Components/Skeletons/BigSkeleton'
import SlideSectionSkeleton from '../Components/Skeletons/SlideSectionSkeleton'
import SlidesSection from '../Components/SlideSection'
import './../styles/home.scss'
const Poster = lazy(() => import('./../Components/Poster'))

const Home = () => {
  return (<>
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { duration: 0.2 } }}
    exit={{ opacity: 0 }}
     className='HomeCont'
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
    </motion.div>
    </>)
}

export default Home
