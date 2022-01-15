import { configureStore } from "@reduxjs/toolkit";
import Counterslice from "./Counterslice";

const counterReducer = Counterslice.reducer
export const store = configureStore({
    reducer:{
        counter: counterReducer,
    }
})