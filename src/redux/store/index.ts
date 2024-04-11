

import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistStore, persistReducer, PersistConfig } from 'redux-persist'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { AutReducer } from '../reducers/aut.reducer';
import { LoadingReducer } from '../reducers/loading.reducer';
import EncryptedStorage from 'react-native-encrypted-storage';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from '../sagas';
const persistConfig : PersistConfig<RootState> = {
    key : 'root',
    storage: EncryptedStorage,
    stateReconciler : autoMergeLevel2,
    whitelist: ['auth'],
    blacklist: ['loading']

}






const rootReducers = combineReducers({
    auth : AutReducer,
    loading : LoadingReducer
});

const sagaMiddleware = createSagaMiddleware();
type RootState = ReturnType<typeof rootReducers>;
console.log();

const persistedReducer = persistReducer<RootState>(persistConfig, rootReducers);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false,
        }).concat(sagaMiddleware),
  });
sagaMiddleware.run(rootSaga)
export const persistor = persistStore(store);