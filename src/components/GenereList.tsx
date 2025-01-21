import useGenere from '../hooks/useGenere'
import { Box, HStack, Image, Text } from "@chakra-ui/react"

const GenereList = () => {
const {data} = useGenere()

  return (
    <Box paddingY='5px'>
        {data.map(genre =><HStack>
            <Image src={genre.image_background} boxSize='32px'></Image>
            <Box key={genre.id} paddingY='10px'><Text fontSize='lg'>{genre.name}</Text></Box>
        </HStack>)}
  </Box>
  )
}

export default GenereList