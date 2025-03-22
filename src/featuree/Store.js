import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Auth/authSlice";
import productReducer from "./Products/ProductSlice";
import cartReducer from "./Cart/CartSlice"

const Store = configureStore({
  reducer: {
    auth: authReducer, 
    products: productReducer,
    cart :cartReducer,
    
  },
});

export default Store;
