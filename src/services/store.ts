import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/productSlice";
import blogReducer from "./features/blogSlice";
import userReducer from "./features/userSlice";
import cartReducer from "./features/cartSlider";
import favoritesReducer from "./features/favoriteSlice";
export const store = configureStore({
  reducer: {
    products: productReducer,
    blogs: blogReducer,
    users: userReducer,
    carts: cartReducer,
    favorites: favoritesReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
