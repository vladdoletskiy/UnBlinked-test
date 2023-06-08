import { FC, PropsWithChildren } from "react";
import styles from "./TopUsersBlock.module.scss";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const TopUsersBlock: FC = () => {
    const topUsers = [
        {
            name: "User Name",
        },
        {
            name: "User Name",
        },
        {
            name: "User Name",
        },
        {
            name: "User Name",
        },
        {
            name: "User Name",
        },
        {
            name: "User Name",
        },
        {
            name: "User Name",
        },
        {
            name: "User Name",
        },
        {
            name: "User Name",
        },
        {
            name: "User Name",
        },
    ];
    return (
        <div className={styles.main}>
            <p>Used Function</p>
            <div className={styles.functions}>
                <div>Simple Moving Average</div>
                <div>Relative Strength Index</div>
                <button type="button">Show less</button>
            </div>

            <div className={styles.topUsers}>
                <h4>Top 10 Creator</h4>
                <div>
                    {topUsers.map((user) => (
                        <div className={styles.userItem}>
                            <AccountCircleIcon style={{ color: "grey" }} />
                            <p>{user?.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TopUsersBlock;
