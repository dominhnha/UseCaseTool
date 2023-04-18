import authSlice from './reducer';
import { createAction } from '@reduxjs/toolkit';

export interface signIn {
    email: string, 
    password: string
}

export interface signInSuccess{
    uid:string,
    displayName: string|null;
    email: string;
    photoUrl: string | null;
    emailVerified?: string | null;
}

export const _signIn = createAction(authSlice.actions.AUTH_SIGN_IN_FETCH.type, (payload: signIn) => {
    return {
        payload
    };
});

export const _signInSuccess = createAction(authSlice.actions.AUTH_SIGN_IN_SUCCESS.type, (payload: signInSuccess) => {
    return {
        payload
    };
});

export const _signInError = createAction(authSlice.actions.AUTH_SIGN_IN_ERROR.type, (payload: any) => {
    return {
        payload
    };
});

export const _signInPenning = createAction(authSlice.actions.AUTH_SIGN_IN_PENNING.type);
