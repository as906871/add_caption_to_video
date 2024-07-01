import React from 'react';
import { useSelector } from 'react-redux';

const StateLogger = () => {
  const video = useSelector((state) => state.video);
  const {captions} = useSelector((state) => state.captions);

  console.log("Video State:", video);
  console.log("Captions State:", captions);

  return null;
};

export default StateLogger;