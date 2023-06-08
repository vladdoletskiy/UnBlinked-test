import { FC } from "react";
import styles from "./Charts.module.scss";
import DoughnutChart from "../../shared/components/charts/doughnut-chart";
import BarChart from "../../shared/components/charts/bar-chart";
import LinerChart from "../../shared/components/charts/liner-chart";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import React from "react";
import { CryptoCurrencyData } from "./types";
import { calculateAverage } from "./utils";
import RefreshIcon from "@mui/icons-material/Refresh";
import { CoinMarketService } from "../../services/coin-market.service";
import { setCoinMarket } from "../../store/slices/coinMarketSlice";

const Charts: FC = () => {
    const data = useSelector((state: RootState) => state.coinMarket.coinMarket);

    const [lineChart, setLineChartData] =
        React.useState<CryptoCurrencyData | null>(null);
    const [barChart, setBarChartData] =
        React.useState<CryptoCurrencyData | null>(null);
    const [doughnutChart, setDoughnutChartData] = React.useState<any>(null);

    const [linerTab, setLinerTab] = React.useState(true);
    const [barTab, setBarTab] = React.useState(false);
    const [doughnutTab, setDoughnutTab] = React.useState(false);

    let [requestId, setRequestId] = React.useState(0);

    const dispatch: AppDispatch = useDispatch();

    React.useEffect(() => {
        data?.map((item) => {
            if (item.type === "bar") {
                setBarChartData(item);
            } else if (item.type === "line") {
                setLineChartData(item);
            } else return null;
        });
    }, [data]);

    React.useEffect(() => {
        const res = calculateAverage(data);
        setDoughnutChartData(res);
    }, [data]);

    const reloadData = async () => {
        const res: CryptoCurrencyData[] = await CoinMarketService.getDataById(
            requestId.toString()
        );
        dispatch(setCoinMarket(res));
        if (requestId !== 3) {
            setRequestId(++requestId);
        } else setRequestId(0);
    };

    return (
        <div className={styles.container}>
            <div className={styles.reloadBtn}>
                <RefreshIcon />
                <button type="button" onClick={() => reloadData()}>
                    reload data
                </button>
            </div>
            <div className={styles.chartBox}>
                {linerTab ? (
                    <LinerChart
                        title={"Binance Data"}
                        color={lineChart?.color}
                        statistic={lineChart?.statistic}
                    />
                ) : barTab ? (
                    <BarChart
                        title={"ByBit Data"}
                        color={barChart?.color}
                        statistic={barChart?.statistic}
                    />
                ) : doughnutTab ? (
                    <DoughnutChart title={"Kraken Data"} data={doughnutChart} />
                ) : (
                    <div>No Data</div>
                )}
            </div>
            <div className={styles.chartTabs}>
                <button
                    onClick={() => {
                        setLinerTab(true);
                        setBarTab(false);
                        setDoughnutTab(false);
                    }}
                >
                    Liner Chart
                </button>
                <button
                    onClick={() => {
                        setLinerTab(false);
                        setBarTab(true);
                        setDoughnutTab(false);
                    }}
                >
                    Bar Chart
                </button>
                <button
                    onClick={() => {
                        setLinerTab(false);
                        setBarTab(false);
                        setDoughnutTab(true);
                    }}
                >
                    Doughnut Chart
                </button>
            </div>
        </div>
    );
};

export default Charts;
