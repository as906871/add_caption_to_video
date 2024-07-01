import { configureStore } from '@reduxjs/toolkit';
import videoReducer from '../reducer/Video/videoSlice';
import captionsReducer from "../reducer/Caption/captionSlice";

export const store = configureStore({
  reducer: {
    video: videoReducer,
    captions: captionsReducer,
  },
});
