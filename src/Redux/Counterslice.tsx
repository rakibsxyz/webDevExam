import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
        status: 'idle',
    },
    reducers: {
        increment: (state) => {
            state.value +=1;
        },
        decrement: (state) =>{
            state.value -=1;
        }
    }
})

export default counterSlice;
