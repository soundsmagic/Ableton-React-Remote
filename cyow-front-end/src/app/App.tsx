import React from 'react';
import { ScenesContainer } from '../containers/ScenesContainer/ScenesContainer';
import { TracksContainer } from '../containers/TracksContainer/TracksContainer';
import { StyledApp } from './styledApp';


function App() {
  return (
    <StyledApp>
      <TracksContainer />
      <ScenesContainer />
    </StyledApp>
  );
}

export default App;