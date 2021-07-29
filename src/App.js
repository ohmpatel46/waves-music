import {useState} from 'react';
import Player from './components/Player';
import Song from './components/Song';
import Library from './components/Library';
import './styles/App.scss';
import data from './util';

function App() {
  const [songs,setSongs]=useState(data());
  const [currentsong,setCurrentsong]=useState(songs[0]);
  const [songstatus,setSongStatus]=useState(false);

  return (
    <div className="App">
      <Song currentsong={currentsong}/>
      <Player songstatus={songstatus} setSongStatus={setSongStatus} currentsong={currentsong}/>
      <Library songs={songs} setCurrentsong={setCurrentsong}/>
    </div>
  );
}

export default App;
