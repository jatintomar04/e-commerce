import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";

let userExit = JSON.parse( localStorage.getItem('user'))

const authSlice = createSlice({
    name : "auth",
    initialState : {
        user : userExit || null,
        isLoading : false,
        isSuccess : false,
        isError : false,
        message : "Error",
       
    },
    reducers : {},
    extraReducers : (builder) => {

        builder
        .addCase (registerUser.pending , (state, action) =>{
            state.isLoading = true
            state.isError = false
            state.isSuccess = false
        })
        .addCase (registerUser.rejected , (state, action) =>{
            state.isLoading = false
            state.isError = true
            state.isSuccess = false
            state.message = action.payload
        })
        .addCase (registerUser.fulfilled , (state, action) =>{
            state.isLoading = false
            state.isError = false
            state.isSuccess = true
            state.user = action.payload
        })

        .addCase (logOut.fulfilled , (state, action) =>{
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
            state.user = null
          
        })
        .addCase (LoginUser.pending , (state, action) =>{
            state.isLoading = true
            state.isError = false
            state.isSuccess = false
        })
        .addCase (LoginUser.rejected , (state, action) =>{
            state.isLoading = false
            state.isError = true
            state.isSuccess = false
            state.message = action.payload
        })
        .addCase (LoginUser.fulfilled , (state, action) =>{
            state.isLoading = false
            state.isError = false
            state.isSuccess = true
            state.user = action.payload
        })
    }
   
})
export default authSlice.reducer;


// register
export const registerUser =createAsyncThunk("AUTH/REGISTER", async(formData , thunkAPI)=>{

    try {
        return await authService.register(formData)
       
        
    } catch (error) {
        const message = error.response.data.message
        return thunkAPI.rejectWithValue(message);
    }


})
// login
export const LoginUser =createAsyncThunk("AUTH/LOGIN", async(formData , thunkAPI)=>{
   

    try {
        return await authService.Login(formData)
       
        
    } catch (error) {
        const message = error.response.data.message
        return thunkAPI.rejectWithValue(message);
    }


})


// logout user 

export const logOut = createAsyncThunk("AUTH/LOGOUT", async () => {
    localStorage.removeItem("user");
});
