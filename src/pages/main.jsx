import { Container, Text, Box, VStack, StackDivider } from '@chakra-ui/react'
import Header from './../components/header'
import SlideItems from '../components/slideItems'
import { useSelector } from 'react-redux'

export default function Main () {
  const { data } = useSelector(state => state.apidata.topTranding)
  return (<Container as='div' minW={'full'} padding='0' height={'auto'} bg={'gray.200'} overflow='hidden'>
        <Header >header</Header>
        <VStack
        direction={'row'}
        spacing={8}
        w={'full'}
        divider={<StackDivider borderColor='black'/>}
        align={'stretch'}
        padding={'90px 20px'}
        >
           <Box>
                <Text fontSize={'2xl'}>Tranding</Text>
                <SlideItems data={data}/>
           </Box>
           <Box>
               <Text fontSize={'2xl'}>in comming</Text>
               <SlideItems/>
           </Box>
        </VStack>
    </Container>)
}
