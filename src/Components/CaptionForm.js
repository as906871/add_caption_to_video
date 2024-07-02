import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUrl } from '../Redux/reducer/Video/videoSlice';
import { addCaption } from '../Redux/reducer/Caption/captionSlice';

const CaptionForm = () => {
    const [videoUrl, setVideoUrl] = useState('');
    const [captionText, setCaptionText] = useState('');
    const [timestamp, setTimestamp] = useState('');
    const dispatch = useDispatch();
  
    const handleAddCaption = () => {
      const parsedTimestamp = parseFloat(timestamp);
      if (!isNaN(parsedTimestamp)) {
        dispatch(addCaption({ text: captionText, timestamp: parsedTimestamp }));
        setCaptionText('');
        setTimestamp('');
      } else {
        alert('Please enter a valid timestamp');
      }
    };
  
    const handleSetUrl = () => {
      if (videoUrl) {
        dispatch(setUrl(videoUrl));
      } else {
        alert('Please enter a valid video URL');
      }
    };
  
    return (
      <div className='caption-form'>
        <div>
          <input
            type="text"
            placeholder="Video URL"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
          />
          <button onClick={handleSetUrl}>Set Video URL</button>
        </div>
        <div>
          <input
            type="text"
            placeholder="Caption"
            value={captionText}
            onChange={(e) => setCaptionText(e.target.value)}
          />
          <input
            type="text"
            placeholder="Timestamp (seconds)"
            value={timestamp}
            onChange={(e) => setTimestamp(e.target.value)}
          />
          <button onClick={handleAddCaption}>Add Caption</button>
        </div>
      </div>
    );
  };
  
  export default CaptionForm;