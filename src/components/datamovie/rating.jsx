import { HStack, Icon, Tag } from '@chakra-ui/react'
import { FaStar } from 'react-icons/fa'

export default function Rating ({ votes, count }) {
  return (
        <HStack spacing="0.5" >
          {Array.from({ length: 10 })
            .map((_, index) => index + 1)
            .map((index) => (
              <Icon
                key={index}
                as={FaStar}
                fontSize={'md'}
                color={index <= votes ? '#fee440' : 'gray'}
              />
            ))}
            <Tag>Votes : {count}</Tag>
        </HStack>
  )
}
