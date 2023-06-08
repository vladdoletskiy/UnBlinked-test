import styles from "../styles/HomePage.module.scss";
import Layout from "../components/layout/Layout";
import { GetServerSideProps } from "next";
import { CoinMarketService } from "../services/coin-market.service";
import { CryptoCurrencyData } from "../components/charts/types";
import { AppDispatch } from "../store";
import { setCoinMarket } from "../store/slices/coinMarketSlice";
import { useDispatch } from "react-redux";
import React, { FC } from "react";

interface HomePageProps {
    coinMarket: CryptoCurrencyData[];
}

const HomePage: FC<HomePageProps> = (props) => {
    const dispatch: AppDispatch = useDispatch();

    React.useEffect(() => {
        dispatch(setCoinMarket(props.coinMarket));
    }, []);

    return (
        <div className={styles.container}>
            <Layout />
        </div>
    );
};

export const getServerSideProps: GetServerSideProps<{
    coinMarket: CryptoCurrencyData[];
}> = async () => {
    const coinMarket = await CoinMarketService.getDataById("0");

    return {
        props: JSON.parse(JSON.stringify({ coinMarket })),
    };
};
export default HomePage;
