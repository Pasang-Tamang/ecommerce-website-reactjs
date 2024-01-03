import {configureStore} from "@reduxjs/toolkit"
import  authSlice  from "../slice/slice"

export const store = configureStore({
    reducer:{
        auth: authSlice
    }
})