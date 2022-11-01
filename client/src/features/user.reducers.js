import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: false,
  },
  reducers: {
    setgetUsers: (state, { payload }) => {
      state.user = payload;
    },
    setgetUnique: (state, { payload }) => {
      state.user = payload;
    },
    logOut: (state, { payload }) => {
      state.user = true;
    },

    updateProfil: (state, { payload }) => {
      // return {
      //   ...state,
      //   bio: payload,
      // };
      state.user.push(payload);
    },

    deleteUser: (state, { payload }) => {
      state.user = state.user.filter((user) => {
        return user.id !== payload;
      });
    },

    followUser: (state, { payload }) => {
      state.user.push(payload);
    },
    unfollowUser: (state, { payload }) => {
      state.user = state.user.filter((id) => id !== payload);
    },

    uploadPicture: (state, { payload }) => {
      return {
        ...state,
        picture: payload,
      };
    },
  },
});

export const {
  setgetUsers,
  setgetUnique,
  setLogOut,
  followUser,
  addUpload,
  logOut,
  deleteUser,
  uploadPicture,
  updateProfil,
} = userSlice.actions;
export default userSlice.reducer;
