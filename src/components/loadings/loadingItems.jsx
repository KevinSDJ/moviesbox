import { useSelector } from 'react-redux'
import CardSkeleton from './skeletonCard'
import { Stack } from '@chakra-ui/react'
import nextId from 'react-id-generator'
export default function LoadingMoviesItems () {
  const { screensize } = useSelector(state => state.behaviorcomponent)
  const fakeArray = Array.from({ length: Math.floor(screensize / 250) })

  return (
  <Stack direction={'row'} spacing={4} >
        {fakeArray.map(e => <CardSkeleton key={nextId('item-sk')}/>)}
 </Stack>
  )
}
