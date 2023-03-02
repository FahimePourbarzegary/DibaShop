import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import http from "../httpService";
//types & initialvalues
export type FavoriteType = {
  id: number;
  productId: number;
  userId: number;
  name: string;
  price: number;
  off: number;
  image: string;
  detail: string;
  category: number;
};
interface FavoriteState {
  favorite: FavoriteType[];
  favoriteByUserId: FavoriteType[] | null;
  loadingFavorite: boolean;
  errorFavorite: any;
}

const initialState = {
  favorite: [],
  favoriteByUserId: null,
  loadingFavorite: false,
  errorFavorite: null,
} as FavoriteState;

//Create AsyncTunk

export const fetchFavoriteByUserId = createAsyncThunk(
  "favorite/fetchFavoriteByUserId",
  async (_, { rejectWithValue }) => {
    try {
      const userdata = localStorage.getItem("AuthLogin") || null;
      if (userdata) {
        const userId = JSON.parse(userdata);
        const response = await http.get(`favorites?userId=${userId.id}`);
        console.log(response.data);
        return response.data;
      } else {
        return null;
      }
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  }
);

//Slice
const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFavoriteByUserId.pending, (state, action) => {
      return { ...state, loadingFavorite: true };
    });
    builder.addCase(fetchFavoriteByUserId.fulfilled, (state, action) => {
      return {
        ...state,
        loadingFavorite: false,
        favoriteByUserId: action.payload,
        errorFavorite: null,
      };
    });
    builder.addCase(fetchFavoriteByUserId.rejected, (state, action) => {
      return {
        ...state,
        loadingFavorite: false,
        favoriteByUserId: null,
        errorFavorite: action.payload,
      };
    });
  },
});

export default favoriteSlice.reducer;
