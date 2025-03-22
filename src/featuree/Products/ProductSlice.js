import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import  { fatchProduct, fatchProducts } from "./ProductService";



const ProductSlice = createSlice({
name : "products",
initialState : {
    products : [],
    product : {},
    isLoading : false,
    isSuccess : false,
    isError : false,
    message : "",
},

reducers : {},
extraReducers : (builder) => {

  builder
  .addCase(getProducts.pending , (state, action) => {
    state.isLoading = true
    state.isSuccess = false
     state.isError = false
  })
  .addCase(getProducts.fulfilled , (state, action) => {
    state.isLoading = false
    state.isSuccess = true
    state.products = action.payload
     state.isError = false

  })
  .addCase(getProducts.rejected , (state, action) => {
    state.isLoading = false
    state.isSuccess = false
     state.isError = true
  })

  //  fatch single product

  .addCase(getProduct.pending , (state, action) => {
    state.isLoading = true
    state.isSuccess = false
     state.isError = false
  })
  .addCase(getProduct.fulfilled , (state, action) => {
    state.isLoading = false
    state.isSuccess = true
    state.product = action.payload
     state.isError = false

  })
  .addCase(getProduct.rejected , (state, action) => {
    state.isLoading = false
    state.isSuccess = false
     state.isError = true
  })

}
    
})

export default ProductSlice.reducer

// get  product thunk


export const  getProducts = createAsyncThunk("PRODUCTS/FATCHALL", async(_ , thunkAPI)=>{

    try {
      return await fatchProducts();
          
    } catch (error) {
      console.log(error);
    }


})

// fatch single product

export const  getProduct = createAsyncThunk("FATCH/PRODUCT/", async(id)=>{

  try {
    return await fatchProduct(id);
     
  } catch (error) {
    console.log(error);
  }


})


