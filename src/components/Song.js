import React from 'react';

const Song = ({currentsong})=>{
    return(
        <div className="song-container">
            <img alt={currentsong.name} src={currentsong.cover}></img>
            <h2>{currentsong.name}</h2>
            <h3>{currentsong.artist}</h3>
        </div>
    );
}

export default Song;