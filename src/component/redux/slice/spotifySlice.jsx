// features/counter/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const spotifySlice = createSlice({
  name: "spotify",
  initialState: {
    playlists:[],

  },
  reducers: {
    setPlaylist: (state, action) => {
      state.playlists = action.payload;
    },
  },

});

export const { setPlaylist } = spotifySlice.actions;

export default spotifySlice.reducer;
