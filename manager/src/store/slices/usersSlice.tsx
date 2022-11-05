import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { _renderMatches } from "react-router/lib/hooks";
import { axiosApi } from "../axios";
import { v4 as uuid } from "uuid";

export interface User extends RegisterUserPost {
  id: string;
}
interface LoginUserPost {
  email: string;
  password: string;
}

interface RegisterUserPost extends LoginUserPost {
  name: string;
}
export interface UsersProps {
  users: User[];
}

interface userState {
  users: [];
  statusRegister: "loading" | "succeeded" | "failed" | "idle";
  statusLogin: "loading" | "succeeded" | "failed" | "idle";
  isAuth: boolean;
}

const initialState: userState = {
  users: [],
  statusRegister: "idle",
  statusLogin: "idle",
  isAuth: false,
};

export const registerUser = createAsyncThunk(
  "users/register",
  async ({ email, password, name }: RegisterUserPost, { rejectWithValue }) => {
    try {
      const responce = await axiosApi.post("users/register", {
        email,
        password,
        name,
      });
      console.log(responce.data);
    } catch (error: any | undefined) {
      console.log(error.message);
      return rejectWithValue(error.response.data);
    }
  }
);

export const loginUser = createAsyncThunk(
  "users/login",
  async ({ email, password }: LoginUserPost, { rejectWithValue }) => {
    try {
      const responce = await axiosApi.post("users/login", { email, password });
      console.log(responce.data);
    } catch (error: any | undefined) {
      console.log(error.message);
      return rejectWithValue(error.response.data);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // setUser: (state, { payload }: PayloadAction<Omit<User, "id">>) => {
    //  const user = state.users.find((localUser) =>
    //               localUser.email === payload.email &&
    //               localUser.password === payload.password
    //               );
    //       if(user) {
    //         console.log(state.users)
    //         // state.users.email = user.email;
    //         // state.users.id =  user.id;
    //         // state.users.isAuth =  true;
    //       }
    //     console.log(state);
    //   //  console.log(' action =>' + state.isAuth);
    // },
    // addUser: (state, {payload} : PayloadAction<Omit<User, ' id'>>) => {
    //   state.users = [
    //     ...state.users,
    //     {
    //       id: uuid(),
    //       email: payload.email,
    //       password: payload.password,
    //     }
    //   ]
    // },
    // removeUser(state) {
    //   state.email = null;
    //   state.id = null;
    //   state.isAuth = false;
    // },
    logoutUser: (state) => {
      state.isAuth =  false;
      state.statusLogin = 'idle';
      state.statusRegister = 'idle';
    }
  },

  extraReducers(builder) {
    builder
      .addCase(registerUser.pending, (state, action) => {
        state.statusRegister = "loading";
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.statusRegister = "succeeded";
        // state.isAuth = true;
        console.log(state.isAuth);
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.statusRegister = "failed";
        console.log(action);
      })
      .addCase(loginUser.pending, (state, action) => {
        state.statusLogin = "loading";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.statusLogin = "succeeded";
        state.isAuth = true;
        console.log(state.isAuth);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.statusLogin = "failed";
        state.isAuth = false;
        console.log(action);
      });
  },
});

// export const { setUser } = userSlice.actions;
export const { logoutUser } = userSlice.actions;
export default userSlice.reducer;
