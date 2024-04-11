import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { reducerName } from "../../common/const"



type LoadingType = {
    isLoading : boolean
}


const initialState : LoadingType = {
    isLoading : false
}

const reducer = createSlice({
    name : reducerName.Loading,
    initialState: initialState,
    reducers: {
        handleShowLoading : (state : LoadingType) => {
            console.log('is loading');
            
            state.isLoading = true;
        },
        handleOffLoading : (state : LoadingType, _ : PayloadAction) => {
            state.isLoading = false;
        }
    }
})

export const LoadingActions = reducer.actions;
export const LoadingReducer = reducer.reducer;
