import { all, fork, put } from "redux-saga/effects";
import {  watchAuthSaga } from "./aut.saga";
import { LoadingActions } from "../reducers/loading.reducer";
const delay = (ms: number) => new Promise(res => setTimeout(res, ms))

export default function* rootSaga() {
     
    yield all([
         fork(watchAuthSaga)
    ])
    // code after all-effect
  }