export type CryptoCurrencyData = {
    statistic: { time: string; value: number }[];
    color: string;
    type: "bar" | "line";
};
