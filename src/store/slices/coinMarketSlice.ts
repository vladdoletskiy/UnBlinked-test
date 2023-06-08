import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CryptoCurrencyData } from "../../components/charts/types";

interface CoinMarketState {
    coinMarket: CryptoCurrencyData[] | null;
}

const initialState: CoinMarketState = {
    coinMarket: null,
};

const coinMarketSlice = createSlice({
    name: "coinMarket",
    initialState,
    reducers: {
        setCoinMarket: (state, action: PayloadAction<CryptoCurrencyData[]>) => {
            state.coinMarket = action.payload;
        },
    },
});

export const { setCoinMarket } = coinMarketSlice.actions;
export default coinMarketSlice.reducer;
