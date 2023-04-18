
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
AUTH_SIGN_IN_SUCCESS,
AUTH_SIGN_IN_PENNING,
AUTH_SIGN_IN_ERROR,
AUTH_SIGN_IN_FETCH,
AUTH_SIGN_OUT,
} from './constants'

export interface initUser {
    auth:{
        uid:string|null;
        displayName: string | null;
        email: string | null;
        photoUrl: string | null;
        emailVerified?: string | null;
    }
    loading: boolean;
    error: any;
}

export const initState: initUser = {
    auth:{
        uid:null,
        displayName: null,
        email: null,
        photoUrl: null,
        emailVerified: null,
    },
    loading: false,
    error: null,
};


const authSlice = createSlice({
    name: 'auth',
    initialState: initState,
    reducers: {
        AUTH_SIGN_IN_SUCCESS:(state,action)=>{
            state.loading=false;
            state.error = null;
            state.auth = action.payload
        },
        AUTH_SIGN_IN_PENNING:(state,action)=>{
            state.loading=true;
        },
        AUTH_SIGN_IN_FETCH:(state,action)=>{
            state.loading=true;
        },
        AUTH_SIGN_IN_ERROR:(state,action)=>{
            state.loading=false;
            state.error = action.payload;
        },
        AUTH_SIGN_OUT:(state,action)=>{
            state.loading=false;
            state.error = null;
            state.auth = {
                uid:null,
                displayName: null,
                email: null,
                photoUrl: null,
                emailVerified: null,
            }
        }
    },

});

export default authSlice

