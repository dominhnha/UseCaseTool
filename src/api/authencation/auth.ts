import { auth, app } from '../../firebaseConfig'
import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword
} from "firebase/auth";



export const CreateUserWithEmailAndPassword = (email: string, password: string) => {
    return createUserWithEmailAndPassword( auth, email, password);
}

export const SignInWithEmailAndPassword = (email: string, password: string) => {
    return signInWithEmailAndPassword( auth, email, password);
}