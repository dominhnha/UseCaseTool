import { RootState } from "../../store"

export const selectorAuth = (state:RootState)=> state.user.auth.auth.uid
