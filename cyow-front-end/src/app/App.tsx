import { CssBaseline, Grid } from '@mui/material';
import React from 'react';
import { ScenesContainer } from '../containers/ScenesContainer/ScenesContainer';
import { TracksContainer } from '../containers/TracksContainer/TracksContainer';

function App() {
  return (
    <>
      <CssBaseline />
      <Grid container>
        <TracksContainer />
        <ScenesContainer />
      </Grid>
    </>
  );
}

export default App;