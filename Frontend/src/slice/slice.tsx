import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn:false,
    email:"",
    role:"",
    jwt:""
}

export const authSlice:any = createSlice({
    name: "auth",
    initialState,
    reducers:{
        login:(state:any, data) => {
            // console.log(state)
            state.isLoggedIn= true,
            state.email=data.payload.email,
            state.role=data.payload.role,
            state.jwt=data.payload.jwt
        }
    }

})

export const {login} = authSlice.actions


export default authSlice.reducer