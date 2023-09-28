import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    token: "",
    user: "false",
  },
  reducers: {
    update: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    logout: (state) => {
      state.token = "";
      state.user = false;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { update, logout, setUser } = userSlice.actions;
export default userSlice.reducer;
