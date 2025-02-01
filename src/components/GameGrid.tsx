import useGames from '@/hooks/useGames';
import { SimpleGrid, Text } from '@chakra-ui/react';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { Genere } from '../hooks/useGenere'
import { useEffect } from 'react';

interface Props {
  selectedGenere: Genere | null
}

const GameGrid = ({selectedGenere} : Props) => {
  const { data, error, isLoading } = useGames(selectedGenere);
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  useEffect(() => {
    console.log("Selected Genre changed:", selectedGenere?.name)
  }, [selectedGenere]);

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, xl: 3 }} gap={4}>
        {isLoading &&
          skeleton.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  )
}

export default GameGrid;