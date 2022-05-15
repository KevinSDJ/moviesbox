import { Container, Box, Image, Skeleton } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
export default function MovieDetail () {
  const { screensize } = useSelector(state => state.behaviorcomponent)
  const { id } = useParams()
  console.log(id)
  return (
        <Container h={'auto'} maxWidth={'100%'} padding='0' bgColor={'rgb(194, 207, 229)'}>
                <Box
                    w={'full'}
                    bg={'url(https://image.tmdb.org/t/p/original//cqnVuxXe6vA7wfNWubak3x36DKJ.jpg)'}
                    h={'auto'}
                    bgRepeat={'no-repeat'}
                    bgSize={'contain'}
                    paddingTop={'calc(10rem)'}
                >
                    <Box h={'10rem'} borderTopRightRadius={'calc(2rem)'} borderTopLeftRadius={'calc(2rem)'} w={'100%'} bgColor={'#37474d'}>
                        sadsa
                    </Box>
                </Box>

        </Container>
  )
}
