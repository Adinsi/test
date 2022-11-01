import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user.reducers";
import usersReducers from "../features/users.reducers";
// import postsReducers from "../features/post.reducers";

export default configureStore({
  reducer: {
    user: userReducer,
    users: usersReducers,
    // posts: postsReducers,
  },
});
