import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { axiosApi } from "../axios";

export interface User {
  id: string;
  email: string;
  name: string;
}
interface LoginUserPost {
  email: string;
  password: string;
}
interface Error {
  message: string;
}

interface RegisterUserPost extends LoginUserPost {
  name: string;
}

interface userState {
  user: User;
  userEmail: string;
  statusRegister: "loading" | "succeeded" | "failed" | "idle";
  statusLogin: "loading" | "succeeded" | "failed" | "idle";
  isAuth: boolean;
  errorMessage : Error | null | undefined;
}

const initialState: userState = {
  user: { id: "", email: "", name: "" },
  userEmail: "",
  statusRegister: "idle",
  statusLogin: "idle",
  isAuth: false,
  errorMessage:  null

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
      return rejectWithValue(error.response.data);
    }
  }
);

export const loginUser = createAsyncThunk(
  "users/login",
  async ({ email, password }: LoginUserPost, { rejectWithValue } ) => {
    try {
      const response = await axiosApi.post("users/login", { email, password });
      return response.data;
    } catch (error: any | undefined) {
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
      state.isAuth = false;
      state.statusLogin = "idle";
      state.statusRegister = "idle";
    },
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
        console.log(action.payload);
        state.userEmail = action.payload.email;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.statusLogin = "failed";
        console.log(action.payload);
        state.errorMessage = action.payload  as Error;
        state.isAuth = false;
        console.log(action, 'slice');
        console.log(state, 'slice state');
      });
  },
});
export const { logoutUser } = userSlice.actions;
export default userSlice.reducer;
