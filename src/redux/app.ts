import { combineReducers } from '@reduxjs/toolkit'
import authSlice from './user/auth/reducer'
export const userReducer = combineReducers({
    auth:authSlice.reducer,
})