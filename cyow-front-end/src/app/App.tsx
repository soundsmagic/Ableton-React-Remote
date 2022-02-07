import React from 'react';
import { ScenesContainer } from '../containers/ScenesContainer/ScenesContainer';
import { TracksContainer } from '../containers/TracksContainer/TracksContainer';

function App() {
  return (
    <div className="App">
      <TracksContainer>Tracks</TracksContainer>
      <ScenesContainer>Scenes</ScenesContainer>
    </div>
  );
}

export default App;
