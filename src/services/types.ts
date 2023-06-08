export type CoinMarketData = {
    Function0?: CoinMarketStatistic[];
    Function1?: CoinMarketStatistic[];
    Function2?: CoinMarketStatistic[];
    option0?: CoinMarketOption;
    option1?: CoinMarketOption;
    option2?: CoinMarketOption;
};

type CoinMarketStatistic = {
    time: string;
    value: number;
};

type CoinMarketOption = {
    type: string;
    color: string;
};
