import { CryptoCurrencyData } from "./types";

export const calculateAverage = (data: CryptoCurrencyData[]) => {
    return data?.map(({ statistic, type }) => ({
        value:
            statistic.reduce((sum, { value }) => sum + value, 0) /
            statistic.length,
        name: type,
    }));
};
