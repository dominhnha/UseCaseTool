import { all, call } from 'redux-saga/effects';
import { combineReducers } from '@reduxjs/toolkit'
import { userReducer } from './app';
import { rootAuthSaga } from './user/auth/Saga';
export const rootReducer = combineReducers({
    user:userReducer,
})

export function* rootSaga(){
    yield all([
        call(rootAuthSaga),
    ])
}