import useGames from '@/hooks/useGames'
import { SimpleGrid, Text } from '@chakra-ui/react'
import GameCard from './GameCard'
import GameCardSkeleton from './GameCardSkeleton'
import GameCardContainer from './GameCardContainer'

const GameGrid = () => {

    const { data, error, isLoading} = useGames()
    const skeleton = [1,2,3,4,5,6,7,8,9]

  return (
    <>
    {error && <Text>{error}</Text>}
        <SimpleGrid columns={{sm: 1, md:2, xl:3}} gap={4}>
            {isLoading && skeleton.map(skeleton => <GameCardContainer><GameCardSkeleton key={skeleton}/></GameCardContainer>)}
        {data.map(game => <GameCardContainer> <GameCard key={game.id} game={game}></GameCard></GameCardContainer>)}
    </SimpleGrid>
    </>
  )
}

export default GameGrid