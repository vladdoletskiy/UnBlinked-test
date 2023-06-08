import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import coinMarketSlice from "./slices/coinMarketSlice";

const rootReducer = combineReducers({
    coinMarket: coinMarketSlice,
});

const makeStore = () =>
    configureStore({
        reducer: rootReducer,
        devTools: true,
    });

export const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const wrapper = createWrapper(makeStore);
