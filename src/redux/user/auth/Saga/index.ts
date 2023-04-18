import { _signIn } from "../action";
import { signInSaga } from "./SignIn";
import { takeEvery,takeLatest, actionChannel } from 'redux-saga/effects';

export function* rootAuthSaga():any {
    const channel = yield actionChannel(_signIn.type);
    yield takeLatest(channel, signInSaga);
}
