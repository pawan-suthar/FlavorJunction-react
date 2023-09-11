import { configureStore } from "@reduxjs/toolkit";
import Cartslices from "./slices/Cartslices";
import CategorySlice from "./slices/CategorySlice"


const Store = configureStore({
    reducer: {
         cart: Cartslices,
         category:CategorySlice
          
    }
})


export default Store;