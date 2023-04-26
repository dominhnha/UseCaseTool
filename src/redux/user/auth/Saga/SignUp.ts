import { call, put } from "redux-saga/effects";
import { CreateUserWithEmailAndPassword } from "../../../../api/authencation/auth";
import { _signUpError, _signUpPenning, _signUpSuccess, signUp } from "../action";
import { useNavigate } from "react-router-dom";
import { current } from "@reduxjs/toolkit";

export function* SignUpSaga(action: { type: string, payload: signUp }): Generator<any, any, any> {
   
    try {
        put(_signUpPenning())
        const { email, password } = action.payload;
        console.log(action.payload)
        const CurentUser = yield call(CreateUserWithEmailAndPassword, email, password);
        console.log(CurentUser)
        if(CurentUser.user){
            yield put(_signUpSuccess(
                {
                    displayName: CurentUser.user.displayName,
                    email: CurentUser.user.email,
                    password:password
                }
            ));
        }
    } catch (error) {
        yield put(_signUpError(error))
    }
}
