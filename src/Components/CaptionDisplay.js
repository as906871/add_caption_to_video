import React from 'react';
import { useSelector } from 'react-redux';

const CaptionDisplay = () => {
  const captions = useSelector((state) => state.captions);
  const currentTime = useSelector((state) => state.video.currentTime);

  console.log('Captions State:', captions);
  console.log('Current Time:', currentTime);

  const currentCaption = captions.captions.find((caption) => {
    console.log(`Comparing currentTime: ${currentTime} with caption timestamp: ${caption.timestamp}`);
    return currentTime >= caption.timestamp && currentTime < caption.timestamp +1;
  });

  console.log('currentCaption', currentCaption);

  return (
    <div className="captions">
      {currentCaption && (
        <div className="active" style={{ color: "white" }}>
          {currentCaption.text}
        </div>
      )}
    </div>
  );
};

export default CaptionDisplay;