import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import http from "../httpService";
//types & initialvalues
export type ProductType = {
  id: number;
  name: string;
  price: number;
  off: number;
  image: string;
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
  product: ProductType[];
}

const initialState: ProductState = {
  loadingProducts: false,
  errorProducts: null,
  products: [],
  product: [],
};
//Create AsyncTunk
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await http.get(`products`);
      return response.data;
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  }
);
export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async (id: string | undefined, { rejectWithValue }) => {
    try {
      const response = await http.get(`products/${id}`);
      console.log(response);
      return response.data;
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  }
);
type decrementProps = {
  productId: number;
  quantity: number;
};
export const decrementInventory = createAsyncThunk(
  "products/decrementInventory",
  async ({ productId, quantity }: decrementProps, { rejectWithValue }) => {
    try {
      const { data } = await http.get(`products/${productId}`);
      const response = await http.put(`products/${data.id}`, {
        ...data,
        inventory: data.inventory - quantity,
      });
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
        product: [],
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
      return {
        ...state,
        loadingProducts: false,
        errorProducts: "",
        products: filteredProduct,
        product: [],
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
