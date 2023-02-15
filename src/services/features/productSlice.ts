import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
//types & initialvalues
export type ProductType = {
  id: number;
  name: string;
  price: number;
  off: number;
  image : string;
  detail: string;
  category: number;
  properties: { title: string; property: string }[];
  material: string;
  inventory: number;
};
export interface ProductState {
  loadingProducts: boolean;
  errorProducts: any;
  products: ProductType[];
  product:ProductType[] ;
}

const initialState: ProductState = {
  loadingProducts: false,
  errorProducts: null,
  products: [],
  product:[]
};
//Create AsyncTunk
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`http://localhost:3000/products`);
      return response.data;
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  }
);
export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async (id:string | undefined, { rejectWithValue }) => {
    try {
      const response = await axios.get(`http://localhost:3000/products/${id}`);
      console.log(response);
      return response.data;
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  }
);
export const decrementInventory = createAsyncThunk(
  "products/decrementInventory",
  async (productInfo: ProductType, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `http://localhost:3000/products/${productInfo.id}`,
        { ...productInfo, inventory: productInfo.inventory - 1 }
      );
      return response.data;
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  }
);
//Slice
export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      return { ...state, loadingProducts: true };
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return {
        ...state,
        loadingProducts: false,
        products: action.payload,
        errorProducts: null,
      };
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      return {
        ...state,
        loadingProducts: false,
        products: [],
        errorProducts: action.payload,
      };
    });
    builder.addCase(fetchProductById.pending, (state, action) => {
      return { ...state, loadingProducts: true };
    });
    builder.addCase(fetchProductById.fulfilled, (state, action) => {
      return {
        ...state,
        loadingProducts: false,
        product: [action.payload],
        errorProducts: null,
      };
    });
    builder.addCase(fetchProductById.rejected, (state, action) => {
      return {
        ...state,
        loadingProducts: false,
        product:[],
        errorProducts: action.payload,
      };
    });
    builder.addCase(decrementInventory.fulfilled, (state, action) => {
      const filteredProduct = state.products.map((product) =>
        product.id === action.payload.id
          ? {
              ...product,
              inventory: product.inventory > 0 ? product.inventory - 1 : 0,
            }
          : product
      );
      return {...state,
        loadingProducts: false,
        errorProducts: "",
        products: filteredProduct,
      };
    });
    builder.addCase(decrementInventory.pending, (state, action) => {
      return { ...state, loadingProducts: true };
    });
    builder.addCase(decrementInventory.rejected, (state, action) => {
      return {
        ...state,
        loadingProducts: false,
        products: [],
        errorProducts: action.payload,
      };
    });
  },
});

export default productSlice.reducer;
