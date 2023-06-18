import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      //update only changes firstName, lastName & profilePhoto
      state.user.firstName = action.payload.firstName;
      state.user.lastName = action.payload.lastName;
      state.user.profilePhoto = action.payload.profilePhoto;
    },
  },
});

export const { loginUser } = loginSlice.actions;

export default loginSlice.reducer;
