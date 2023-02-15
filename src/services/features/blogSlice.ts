import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
//types & initialvalues
export type blogType = {
  id: number;
  title: string;
  image: string;
  blog: string;
  likes: number;
  createdAt: string;
};
interface blogState {
  blogs: blogType[];
  loadingBlogs: boolean;
  errorBlogs: any;
}

const initialState = {
  blogs: [],
  loadingBlogs: false,
  errorBlogs: null,
} as blogState;
//Create AsyncTunk
export const fetchBlog = createAsyncThunk(
  "blog/fetchBlog",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`http://localhost:3000/blogs`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
//Slice
const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBlog.pending, (state, action) => {
      return { ...state, loadingBlogs: true };
    });
    builder.addCase(fetchBlog.fulfilled, (state, action) => {
      return {
        ...state,
        loadingBlogs: false,
        blogs: action.payload,
        errorBlogs: null,
      };
    });
    builder.addCase(fetchBlog.rejected, (state, action) => {
      return {
        ...state,
        loadingBlogs: false,
        blogs: [],
        errorBlogs: action.payload,
      };
    });
  },
});

export default blogSlice.reducer;
