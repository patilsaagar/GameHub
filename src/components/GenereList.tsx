import { Box, Button, HStack, Image, Spinner } from "@chakra-ui/react"
import useGenere, { Genere } from '../hooks/useGenere'

interface Props {
  onSelectedGenere: (genre: Genere) => void
}

const GenereList = ({ onSelectedGenere }: Props) => {
  const { data, isLoading } = useGenere()

  if (isLoading) return <Spinner />
  
  return (
    <Box>
      {data?.map(genre => (
        <HStack key={genre.id}>
          <Image src={genre.image_background} boxSize='32px' />
          <Box paddingY='5px'>
            <Button variant='plain' onClick={() => onSelectedGenere(genre)}>
              {genre.name}
            </Button>
          </Box>
        </HStack>
      ))}
    </Box>
  )
}

export default GenereList