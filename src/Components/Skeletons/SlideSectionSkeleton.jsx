import './../../styles/slidesectionskeleton.scss'



const SlideSectionSkeleton=()=>{
    let fakeArray= Array.from({length:Math.round(window.innerWidth/224)},(v,i)=>i)
    return (<div className='skeletonbarslide'>
        {fakeArray.map((e,i)=><div key={e+i} className='card-skeleton-section-bar' ></div>)}
    </div>)
}

export default SlideSectionSkeleton