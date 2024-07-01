import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  url: '',
  isPlaying: false,
  currentTime: 0,
};

const videoSlice = createSlice({
  name: 'video',
  initialState,
  reducers: {
    setUrl(state, action) {
      state.url = action.payload;
    },
    setPlaying(state, action) {
      state.isPlaying = action.payload;
    },
    setCurrentTime(state, action) {
      state.currentTime = action.payload;
    },
  },
});

export const { setUrl, setPlaying, setCurrentTime } = videoSlice.actions;
export default videoSlice.reducer;