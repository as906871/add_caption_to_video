import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  captions: [],
};

const captionSlice = createSlice({
  name: 'caption',
  initialState,
  reducers: {
    addCaption(state, action) {
      console.log("caption action", action.payload)
      state.captions.push(action.payload);
    },
  },
});

export const { addCaption } = captionSlice.actions;
export default captionSlice.reducer;