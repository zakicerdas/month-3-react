import { configureStore }  from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import gachaReducer, { fetchGacha } from '../features/gacha/gachaSlice';



export const store = configureStore({
    reducer: {
        counter: counterReducer,
        gacha: gachaReducer,
    },
});

store.dispatch(fetchGacha());

export type RootState = ReturnType<typeof store.getState>; 
export type AppDispatch = typeof store.dispatch; 
