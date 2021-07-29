import React from 'react';
import LibrarySong from './LibrarySong';

const Library = ({songs,setCurrentsong})=>{
    return(
        <div className="library">
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map((song)=>
                    (<LibrarySong song={song} songs={songs} setCurrentsong={setCurrentsong} key={song.id}/>)
                )}
            </div>
        </div>
    );
};

export default Library;