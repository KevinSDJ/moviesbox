import { Container ,SimpleGrid,Box} from "@chakra-ui/react";
import Header from './../components/header'
import SlideItems from "../components/slideItems";

export default function Main() {
    
    return (<Container as='section' minW={'full'} height={'90vh'} bg={'gray.200'} overflow='hidden'>
        <Header>header</Header>
        <SlideItems/>

    </Container>)
}