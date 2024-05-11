import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signinStart: (state) => {
      state.loading = true;
    },
    signinSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = false;
    },
    signinFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    signout: (state) => {
      state.user = null;
      state.loading = false;
      state.error = null;
    },
    addSong: (state, action) => {
      console.log(action.payload);
      state.user.user.selectedSong = action.payload.selectedSong;
    },
    addCharacter: (state, action) => {
      console.log(action.payload.selectedCharacter);
      state.user.user.selectedCharacter = action.payload.selectedCharacter;
    },
  },
});

export const {
  signinFail,
  signinStart,
  signinSuccess,
  signout,
  addCharacter,
  addSong,
} = userSlice.actions;
export default userSlice.reducer;
