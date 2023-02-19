import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
//Create AsyncTunk
export const RegisterUser = createAsyncThunk(
  "user/Register",
  async (userInfo: UserType, { rejectWithValue }) => {
    try {
      //get users and check username and email
      const response = await axios.get(`http://localhost:3000/users`);
      const users = response.data;
      const filteredUser = users.filter(
        (user: UserType) =>
          user.username === userInfo.username || user.email === userInfo.email
      );
      //if dosent exist same username or email register if not send null
      if (!filteredUser.length) {
        const { data } = await axios.post(
          `http://localhost:3000/users`,
          userInfo
        );
        localStorage.setItem("AuthLogin", JSON.stringify(data));
        return data;
      } else {
        return null;
      }
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
export type LoginType = {
  useremail: string;
  password: string;
};
export const LoginUser = createAsyncThunk(
  "user/Login",
  async (Login: LoginType, { rejectWithValue }) => {
    try {
      //get users and check user to login
      const response = await axios.get(`http://localhost:3000/users`);
      const users = response.data;
      const filteredUser = users.filter(
        (user: UserType) =>
          (user.username === Login.useremail ||
            user.email === Login.useremail) &&
          user.password === Login.password
      );
      //if user exist send inf if not send null
      if (filteredUser.length) {
        localStorage.setItem("AuthLogin", JSON.stringify(filteredUser[0]));
        return filteredUser[0];
      } else {
        return null;
      }
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  }
);
//types & initialvalues
export type UserType = {
  id: number;
  name: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
  avatar?: string;
  address: string;
};
interface UserState {
  user: UserType | null;
  loggedIn: boolean;
  loading: boolean;
  error: any;
}

const initialState = {
  user: null,
  loggedIn: false,
  loading: false,
  error: null,
} as UserState;
//Slice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    autoLogin: (state) => {
      const user = localStorage.getItem("AuthLogin") || "";
      if (user !== "") {
        return (state = {
          ...state,
          loggedIn: true,
          user: JSON.parse(user),
          error: null,
        });
      }
    },
    logOut: (state) => {
      localStorage.clear();
      return (state = {
        ...state,
        loggedIn: false,
        user: null,
        error: null,
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(LoginUser.pending, (state, action) => {
      return { ...state, loggedIn: false, loading: true };
    });
    builder.addCase(LoginUser.fulfilled, (state, action) => {
      return {
        ...state,
        loading: false,
        loggedIn: action.payload !== null,
        user: action.payload,
        error: null,
      };
    });
    builder.addCase(LoginUser.rejected, (state, action) => {
      return { ...state, loggedIn: false, error: action.payload };
    });
    builder.addCase(RegisterUser.pending, (state, action) => {
      return { ...state, loggedIn: false, loading: true };
    });
    builder.addCase(RegisterUser.fulfilled, (state, action) => {
      console.log(action.payload);

      return {
        ...state,
        loading: false,
        loggedIn: action.payload !== null,
        user: action.payload,
        error: null,
      };
    });
    builder.addCase(RegisterUser.rejected, (state, action) => {
      return { ...state, loggedIn: false, error: action.payload };
    });
  },
});
export const { autoLogin, logOut } = userSlice.actions;
export default userSlice.reducer;
