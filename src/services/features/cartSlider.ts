import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import http from "../httpService";
//types & initialvalues
export type CartType = {
  id: number;
  productId: number;
  userId: number;
  name: string;
  price: number;
  off: number;
  image: string;
  detail: string;
  category: number;
  quantity: number;
  situation: string;
};
export interface CartState {
  loadingCart: boolean;
  errorCart: any;
  cart: CartType[];
}
const initialState: CartState = {
  loadingCart: false,
  errorCart: null,
  cart: [],
};
//Create AsyncTunk
export const fetchCartByUserId = createAsyncThunk(
  "cart/fetchCartByUserId",
  async (_, { rejectWithValue }) => {
    try {
      const userdata = localStorage.getItem("AuthLogin") || null;
      if (userdata) {
        const userId = JSON.parse(userdata);
        const response = await http.get(`cart?userId=${userId.id}`);
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
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCartByUserId.pending, (state, action) => {
      return { ...state, loadingCart: true };
    });
    builder.addCase(fetchCartByUserId.fulfilled, (state, action) => {
      return {
        ...state,
        loadingCart: false,
        cart: action.payload,
        errorCart: null,
      };
    });
    builder.addCase(fetchCartByUserId.rejected, (state, action) => {
      return {
        ...state,
        loadingCart: false,
        cart: [],
        errorCart: action.payload,
      };
    });

    
  },
});

export default cartSlice.reducer;
