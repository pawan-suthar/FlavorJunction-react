import { createSlice } from "@reduxjs/toolkit";

const Cartslice =  createSlice({
    name: "cart",
    initialState: {
        cart: [],
        
    },
    reducers: {
        addToCart: (state, action) => {
            state.cart.push(action.payload);
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((item) => item.id!== action.payload.id);
        },
    },
})


export const { addToCart, removeFromCart } = Cartslice.actions;

export default Cartslice.reducer;
