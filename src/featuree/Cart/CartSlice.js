import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    initialState :{
        CartItems : [],

    },
    reducers : {
        addTocart : (state, action) => {
            return{ ...state,
                CartItems : [action.payload, ...state.CartItems],
            }
           
        },

        removeFromCart : (state, action) => {
            return{
                ...state,
                CartItems : state.CartItems.filter((item)=> item.id !== action.payload),


            }

        }
    },
    extraReducers : (builder) => {},
})


export const {addTocart, removeFromCart} = cartSlice.actions

export default cartSlice.reducer