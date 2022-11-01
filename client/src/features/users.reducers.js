import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  reducers: {
    setgetusers: (state, { payload }) => {
      state.users = payload;
    },
    setgetAll: (state, { payload }) => {
      state.users = payload;
    },
  },
});

export const { setgetusers } = usersSlice.actions;
export default usersSlice.reducer;
