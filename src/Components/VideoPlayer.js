import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactPlayer from 'react-player';
import { setPlaying, setCurrentTime } from  '../Redux/reducer/Video/videoSlice';
import CaptionDisplay from './CaptionDisplay';

const VideoPlayer = () => {
    const dispatch = useDispatch();
    const { url, isPlaying } = useSelector((state) => state.video);
  
    const handlePlayPause = () => {
      dispatch(setPlaying(!isPlaying));
    };
  
    const handleProgress = ({ playedSeconds }) => {
      dispatch(setCurrentTime(playedSeconds));
    };
  
    const handleError = () => {
      alert("Error loading video");
    };
  
    return (
      <div className='video-container'>
        <ReactPlayer
          className="react-player"
          url={url}
          playing={isPlaying}
          controls
          width="600px"
          height="400px"
          onError={handleError}
          onProgress={handleProgress}
        />
        <button className='play-pause-button' onClick={handlePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
        <CaptionDisplay />
      </div>
    );
  };
  
  export default VideoPlayer;

