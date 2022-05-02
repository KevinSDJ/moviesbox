import { Box, SkeletonCircle, SkeletonText, Skeleton } from '@chakra-ui/react'

export default function CardSkeleton () {
  return (<Box padding='6' boxShadow='base' bg='white' >
    <Skeleton height={'200px'}/>
    <SkeletonCircle size='10' />
    <SkeletonText mt='4' noOfLines={2} spacing='4' />
  </Box>)
}
