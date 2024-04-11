import { call, put, takeLatest } from "redux-saga/effects";
import { AuthActions } from "../reducers/aut.reducer";
import { LoginPayload } from "../type/aut.type";
import { LoadingActions } from "../reducers/loading.reducer";
import { PayloadAction } from "@reduxjs/toolkit";
import { AutService } from "../services/aut.services";


function* loginEmail(action : PayloadAction<LoginPayload>) : Generator{
    try {
        
        yield put(LoadingActions.handleShowLoading())
        const { data }: any = yield call(AutService.Login, action.payload);
        console.log(data);
        
    } catch (error) {
        console.log(error);
        
    }finally{
        yield put(LoadingActions.handleOffLoading())
    }
}


export function* watchAuthSaga(){
    yield takeLatest(AuthActions.handleLogin.type, loginEmail)
}