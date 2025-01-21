import { Game } from '../hooks/useGames'
import { Card, CardBody, HStack, Heading, Image, Text } from '@chakra-ui/react'
import PlatformIcon from './PlatformIcon';
import CriticScore from './CriticScore';
import getCroppedImage from '@/services/image-url';

interface Props {
  game: Game
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root>
      <Image src={getCroppedImage(game.background_image)} alt={game.name} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent={'space-between'}>
        <PlatformIcon platforms={game.parent_platforms.map(p => p.platform)}/>
        <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
      </CardBody>
    </Card.Root>
  );
}

export default GameCard;
