import { Grid, GridItem, useBreakpointValue } from '@chakra-ui/react';
import './App.css';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenereList from './components/GenereList';
import { useState } from 'react';
import { Genere } from './hooks/useGenere'

function App() {
  // Use the hook to check if the screen is large or not
  const isLgScreen = useBreakpointValue({ base: false, lg: true });
  const [selectedGenere, setSelectedGenere] = useState<Genere | null>(null)

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}

      templateColumns={{
        base: `1fr`,
        lg: `200px 1fr`,
      }}
    >
      <GridItem area="nav">
        <NavBar/>
      </GridItem>

      {isLgScreen && (
        <GridItem area="aside">
          <GenereList onSelectedGenere={(genere) => setSelectedGenere(genere)}/>
        </GridItem>
      )}
      
      <GridItem area="main">
        <GameGrid selectedGenere={selectedGenere}/>
      </GridItem>
    </Grid>
  );
}

export default App;
