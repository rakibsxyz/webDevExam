import { configureStore } from "@reduxjs/toolkit";
import Counterslice, { authorSlice } from "./AuthorSlice";

export const store = configureStore({
    reducer:{
        authorReducer: authorSlice.reducer,
    }
})