import { Container,Text,SimpleGrid,Box,VStack,StackDivider} from "@chakra-ui/react";
import Header from './../components/header'
import SlideItems from "../components/slideItems";


export default function Main() {
    return (<Container as='div' minW={'full'} padding='0'  height={'auto'} bg={'gray.200'} overflow='hidden'>
        <Header  >header</Header>
        <VStack
        direction={'row'}
        spacing={8}
        w={'full'}
        divider={<StackDivider borderColor='black'/>}
        align={'stretch'}
        padding={"90px 20px"}
        >
           <Box>
                <Text fontSize={'2xl'}>Top Rating</Text>
                <SlideItems/>
           </Box>
           <Box>
               <Text fontSize={'2xl'}>in comming</Text>
               <SlideItems/>
           </Box>
        </VStack>
    </Container>)
}