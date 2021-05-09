import React,{useRef,useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay,faAngleLeft,faAngleRight,faPause} from '@fortawesome/free-solid-svg-icons';
const Player = ({songstatus,setSongStatus,currentsong})=>{

    const audioRef=useRef(null);

    const [songtime,setSongTime]=useState({
        currentTime:0,
        duration:0
    });

    const timeUpdateHandler = (e)=>{
        const currentTime=e.target.currentTime;
        setSongTime({...songtime,currentTime:currentTime});
    };
    const onLoadedMetadataHandler=(e)=>{
        const currentTime=e.target.currentTime;
        const duration=e.target.duration;
        setSongTime({...songtime,currentTime:currentTime,duration:duration});
    };

    const dragHandler = (e)=>{
        audioRef.current.currentTime=e.target.value;
        setSongTime({...songtime,currentTime:e.target.value});
        
    };

    const getTime= (time)=>{
        return(
            Math.floor(time/60) + ":" + ("0" + Math.floor(time%60)).slice(-2)
        );
    };

    const playSongHandler=()=>{
        if(!songstatus){
            audioRef.current.play();
            setSongStatus(!songstatus);
        }
        else{
            audioRef.current.pause();
            setSongStatus(!songstatus);
        }
        
    };

    return(
        <div className="player">
            <div className="time-control">
                <p>{getTime(songtime.currentTime)}</p>
                <input min={0} max={songtime.duration} value={songtime.currentTime} onChange={dragHandler} type="range"></input>
                <p>{getTime(songtime.duration)}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className="previous" onClick={playSongHandler} size="2x" icon={faAngleLeft}/>
                <FontAwesomeIcon className="play" onClick={playSongHandler} size="2x" icon={songstatus?faPause:faPlay}/>
                <FontAwesomeIcon className="next" onClick={playSongHandler} size="2x" icon={faAngleRight}/>
            </div>
            <audio ref={audioRef} src={currentsong.audio} onTimeUpdate={timeUpdateHandler} onLoadedMetadata={onLoadedMetadataHandler}></audio>
        </div>
    );
}

export default Player;