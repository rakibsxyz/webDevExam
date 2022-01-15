import { configureStore } from "@reduxjs/toolkit";
import Counterslice, { counterSlice } from "./Counterslice";

export const store = configureStore({
    reducer:{
        counterReducer: counterSlice.reducer,
    }
})