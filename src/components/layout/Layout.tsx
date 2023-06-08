import { FC } from "react";
import Header from "./header/Header";
import Charts from "../charts/Charts";
import styles from "./Layout.module.scss";
import AppDescription from "../appDescription/AppDescription";
import CommentFeed from "../commentFeed/CommentFeed";
import Catalog from "../catalog/Catalog";
import TopUsersBlock from "../topUsersBlock/TopUsersBlock";

const Layout: FC = () => {
    return (
        <div>
            <Header />
            <main className={styles.container}>
                <Charts />
                <div className={styles.main}>
                    <div>
                        <AppDescription />
                        <CommentFeed />
                        <Catalog />
                    </div>
                    <div className={styles.topUsersBlock}>
                        <TopUsersBlock />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Layout;
