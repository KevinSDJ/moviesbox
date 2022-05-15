import { Image, Box, Skeleton } from '@chakra-ui/react'
import MediaPlayer from './mediaplayer.jsx'
import { BoxDataSlideDesktop } from './Boxdataslide'
import { useState } from 'react'
import { useSelector } from 'react-redux'
export default function CarrItemSlide ({ id, backdroppath, voteaverage, votecount, posterpath, originaltitle, releasedate }) {
  const [openMedia, setOpenMedia] = useState(false)
  const { screensize } = useSelector(state => state.behaviorcomponent)
  return (
        <Box as={'section'} height={(screensize < 900 && 'auto') || '100vh'} pos={'relative'} boxShadow={(screensize < 900 && 'none') || '10px 10px 10px #c2cfe5 inset, -10px -10px 10px #c2cfe5 inset'} bg={(screensize < 900 && 'transparent') || 'radial-gradient(transparent 30%,#c2cfe5 90%)'} >
          {openMedia && <MediaPlayer id={id}/>}
        <Image
          height={(screensize < 900 && 'auto') || '100%'}
          pos={(screensize < 900 && 'relative') || 'absolute'}
          fallback={<Skeleton h={'100%'} />}
          w={'100%'}
          zIndex={(screensize < 900 && 'auto') || -1}
          src={`https://image.tmdb.org/t/p/original/${backdroppath}`} />
          {screensize > 900 && <BoxDataSlideDesktop posterpath={posterpath} originaltitle={originaltitle} releasedate={releasedate} setOpenMedia={setOpenMedia} voteaverage={voteaverage} votecount={votecount} />}
      </Box>
  )
}
