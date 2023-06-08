import axios from "axios";
import { CoinMarketData } from "./types";
import { transformCoinMarketData } from "./utils";

const API_URL = "https://ubtaskapi.vercel.app/api/resource/";
axios.defaults.baseURL = API_URL;

export const CoinMarketService = {
    async getDataById(id: string) {
        const { data } = await axios.get<CoinMarketData>(id);

        return transformCoinMarketData(data);
    },
};
