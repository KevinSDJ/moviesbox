import { Box ,Spacer,Flex} from '@chakra-ui/react'
import Searchbar from './searchbar'




export default function Header() {
    return (<Box borderTop={'1px solid white'} as={'header'} width='full' height={'100px'} bg='blue.400' >
        <Flex height={'full'} w={'90%'}  margin={'0 auto'}  bg={'green'}>
            <Box p='4' bg='red.400' justifyContent={'space-around'}>
                Box 1
            </Box>
            <Spacer />
            <Box p='4' bg='green.400'>
                <Searchbar/>
            </Box>
        </Flex>
    </Box>)
}