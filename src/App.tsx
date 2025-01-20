import { Grid, GridItem, useBreakpointValue } from '@chakra-ui/react';
import './App.css';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';

function App() {
  // Use the hook to check if the screen is large or not
  const isLgScreen = useBreakpointValue({ base: false, lg: true });

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar/>
      </GridItem>

      {isLgScreen && (
        <GridItem area="aside">
          Side
        </GridItem>
      )}
      
      <GridItem area="main">
        <GameGrid/>
      </GridItem>
    </Grid>
  );
}

export default App;
