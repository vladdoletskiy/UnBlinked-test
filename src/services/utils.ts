import { CoinMarketData } from "./types";

export const transformCoinMarketData = (value: CoinMarketData) => {
    const functionKeys = Object.keys(value).filter((key) =>
        key.startsWith("Function")
    );
    const optionKeys = Object.keys(value).filter((key) =>
        key.startsWith("option")
    );
    const data = [];

    for (let i = 0; i < functionKeys.length; i++) {
        const functionKey = functionKeys[i];
        const optionKey = optionKeys.find((key) =>
            key.endsWith(functionKey.slice(-1))
        );

        const statistic = value[functionKey];
        const { type, color } = value[optionKey];

        const existingData = data.find((item) => item.type === type);
        if (existingData) {
            existingData.statistic = existingData.statistic.concat(statistic);
        } else {
            data.push({ statistic, color, type });
        }
    }

    return data;
};
