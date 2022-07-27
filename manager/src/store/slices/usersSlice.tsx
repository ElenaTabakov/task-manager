import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { _renderMatches } from 'react-router/lib/hooks';

export interface User{
    userId: number,
    userName: string,
    userPassword: string,
    token?: string,
    isAuth: boolean
}

export interface UserState {
    // isAuth: boolean;
    email: string  | null,
    token: string  | null,
    id: string | null
}

const initialState: UserState = {
    // isAuth: false,
    email: null,
    token: null,
    id: null,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
       setUser: (state, {payload}) => {
           state.email = payload.email;
           state.token = payload.token;
           state.id = payload.id;
        },
        removeUSer(state){
            state.email = null;
            state.token = null;
            state.id = null;
        }

    }
})

export const { setUser , removeUSer } = userSlice.actions

export default userSlice.reducer

