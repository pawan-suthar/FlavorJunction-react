import { configureStore } from "@reduxjs/toolkit";
import Cartslices from "./slices/Cartslices";


const Store = configureStore({
    reducer: {
         cart: Cartslices,
    }
})


export default Store;