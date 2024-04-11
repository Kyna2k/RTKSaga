



import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { AuthType, LoginPayload } from "../type/aut.type"
import { reducerName } from "../../common/const"



const initualState : AuthType = {
    refreshToken : "",
    token : "",
    user : {}

}


const reducer = createSlice({
    name : reducerName.Auth,
    initialState : initualState,
    reducers : {
        handleLogin : (state: AuthType, _: PayloadAction<LoginPayload>) => {
            return {
                ...state,
            }
        },
        handleLoginSuccess : (state : AuthType, payload : PayloadAction<Partial<AuthType>>) => {
            return {
                ...state,
                ...payload
            }
        },
        handleLoginFail : (state : AuthType, payload : PayloadAction<Partial<AuthType>>) => {
            return {
                ...state,
                ...payload
            }
        }
    }
})


export const AuthActions = reducer.actions;
export const AutReducer = reducer.reducer;