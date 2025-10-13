import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  [key: string]: any;
}

interface UserState {
  token: string;
  user: User | null;
}

const initialState: UserState = {
  token: "",
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    update: (state, action: PayloadAction<{ token: string; user: User }>) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    logout: (state) => {
      state.token = "";
      state.user = null;
    },
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    },
  },
});

export const { update, logout, setUser } = userSlice.actions;
export default userSlice.reducer;
