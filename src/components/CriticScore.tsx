import { Badge, Stack } from '@chakra-ui/react'

interface Score {
    score: number
}
const CriticScore = ({ score }: Score) => {
  let  color = score > 75 ? 'green' : score > 60 ? 'yellow' : ''
  return (
    <Stack direction="row" colorPalette= {color} fontSize='20px' paddingX={2} borderRadius={2}><Badge>{score}</Badge></Stack>
  )
}

export default CriticScore