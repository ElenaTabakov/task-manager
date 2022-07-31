import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { _renderMatches } from "react-router/lib/hooks";

export interface User {
  id: number;
  email: string;
  password: string;
}

export interface usersTest {
  users: User[];
}

const usersTest: usersTest = {
  users: [
    {
      id: 1,
      email: "a@test.tt",
      password: "123",
    },
    {
      id: 2,
      email: "b@test.tt",
      password: "123",
    },
  ],
};

export interface UserState {
  email: string | null;
  id: number | null;
  password: string | null;
  isAuth: boolean;
}

const initialState: UserState = {
  email: null,
  password: null,
  id: null,
  isAuth: false,
};



export const userSlice = createSlice({

  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload }: PayloadAction<Omit<User, "id">>) => {
       
      usersTest.users.find((localUser) => {
        if (
          localUser.email == payload.email &&
          localUser.password == payload.password
        ) {
            state = {
               email : payload.email,
                id : localUser.id,
                password : payload.password,
                isAuth : true,
            }

            console.log(state)
        //   state.email = payload.email;
        //   state.id = localUser.id;
        //   state.password = payload.password;
        //   state.isAuth = true;
        }
      });

      console.log(' action =>' + state.isAuth);
    },
    removeUser(state) {
      state.email = null;
      state.id = null;
      state.isAuth = false;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;