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
  cartById: CartType[] | null;
}
const initialState: CartState = {
  loadingCart: false,
  errorCart: null,
  cart: [],
  cartById: null,
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
export const fetchCartById = createAsyncThunk(
  "cart/fetchCartById",
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await http.get(`cart/${id}`);
      return response.data;
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  }
);
export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async (cart: CartType, { rejectWithValue }) => {
    try {
      const response = await http.post(`cart`, cart);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
export const deleteFromCart = createAsyncThunk(
  "cart/deleteFromCart",
  async (cartId: number, { rejectWithValue }) => {
    try {
      const response = await http.delete(`cart/${cartId}`);
      console.log(response);

      return cartId;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
export const changeSituationCart = createAsyncThunk(
  "cart/changeSituationCart",
  async (cart: CartType[], { rejectWithValue }) => {
    let changestate = initialState.cart;
    try {
      cart.map(async (cart) => {
        await http.put(`cart/${cart.id}`, {
          ...cart,
          situation: "BUY_PRODUCT",
        });
        changestate = changestate.map((productCart) =>
          productCart.id === cart.id
            ? { ...cart, situation: "BUY_PRODUCT" }
            : productCart
        );
      });
      return changestate;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const increamentCart = createAsyncThunk(
  "cart/increamentCart",
  async (cart: CartType, { rejectWithValue }) => {
    try {
      const response = await http.put(`cart/${cart.id}`, {
        ...cart,
        quantity: cart.quantity + 1,
      });
      console.log(response);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const decreamentCart = createAsyncThunk(
  "cart/decreamentCart",
  async (cart: CartType, { rejectWithValue }) => {
    try {
      const response = await http.put(`cart/${cart.id}`, {
        ...cart,
        quantity: cart.quantity - 1,
      });
      console.log(response);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
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
    builder.addCase(fetchCartById.pending, (state, action) => {
      return { ...state, loadingCart: true };
    });
    builder.addCase(fetchCartById.fulfilled, (state, action) => {
      return {
        ...state,
        loadingCart: false,
        cartById: state.cartById
          ? [...state.cartById, action.payload]
          : [action.payload],
        errorCart: null,
      };
    });
    builder.addCase(fetchCartById.rejected, (state, action) => {
      return {
        ...state,
        loadingCart: false,
        cartById: null,
        errorCart: action.payload,
      };
    });

    builder.addCase(addToCart.fulfilled, (state, action) => {
      return {
        ...state,
        loadingCart: false,
        cart: [...state.cart, action.payload],
        errorCart: null,
      };
    });
    builder.addCase(deleteFromCart.fulfilled, (state, action) => {
      const filteredCartProduct = state.cart.filter(
        (product) => product.id !== action.payload
      );

      console.log("action", action);

      return {
        ...state,
        loadingCart: false,
        cart: filteredCartProduct,
        errorCart: null,
      };
    });
    builder.addCase(changeSituationCart.pending, (state, action) => {
      return {
        ...state,
        loadingCart: true,
      };
    });
    builder.addCase(changeSituationCart.fulfilled, (state, action) => {
      console.log("action", action);

      return {
        ...state,
        loadingCart: false,
        errorCart: null,
      };
    });
    builder.addCase(changeSituationCart.rejected, (state, action) => {
      return {
        ...state,
        loadingCart: false,
        cart: [],
        errorCart: action.payload,
      };
    });
    builder.addCase(increamentCart.fulfilled, (state, action) => {
      const filteredincrement = state.cart.map((product) =>
        product.id === action.payload.id
          ? { ...action.payload, quantity: action.payload.quantity }
          : product
      );

      console.log("action", action);

      return {
        ...state,
        loadingCart: false,
        cart: filteredincrement,
        errorCart: null,
      };
    });
    builder.addCase(decreamentCart.fulfilled, (state, action) => {
      const filtereddecrement = state.cart.map((product) =>
        product.id === action.payload.id
          ? { ...action.payload, quantity: action.payload.quantity }
          : product
      );

      console.log("action", action);

      return {
        ...state,
        loadingCart: false,
        cart: filtereddecrement,
        errorCart: null,
      };
    });
  },
});

export default cartSlice.reducer;
