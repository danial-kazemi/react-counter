import { configureStore } from "@reduxjs/toolkit";
import conterReducer from '../features/counter/counterSlice';

export const store = configureStore({
    reducer : {
        counter : conterReducer,
    }
})