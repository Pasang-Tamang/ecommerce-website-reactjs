import {combineReducers, configureStore} from "@reduxjs/toolkit"
import  authSlice  from "../slice/slice"
import {persistReducer, persistStore} from "redux-persist"
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key:"root",
    storage,
}

const rootReducer = combineReducers({
    auth:authSlice
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer:persistedReducer,
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})


const persistor = persistStore(store)

export default persistor