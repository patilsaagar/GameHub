import { Grid, GridItem, useBreakpointValue } from '@chakra-ui/react';
import './App.css';

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
      <GridItem area="nav" bg="coral">
        Nav
      </GridItem>

      {isLgScreen && (
        <GridItem area="aside" bg="blue">
          Side
        </GridItem>
      )}
      
      <GridItem area="main" bg="gold">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
