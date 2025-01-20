import { Game } from '../hooks/useGames'
import { Card, CardBody, Heading, Image } from '@chakra-ui/react'

interface Props {
    game: Game
}
const GameCard = ({game} : Props) => {
  return (
    <Card.Root>
        <Image src={game.background_image}></Image>
        <CardBody>
            <Heading fontSize="2xl">{game.name}</Heading>
        </CardBody>
    </Card.Root>
  )
}

export default GameCard