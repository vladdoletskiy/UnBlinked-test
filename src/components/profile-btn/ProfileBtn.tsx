import { FC, PropsWithChildren } from "react";
import styles from "./ProfileBtn.module.scss";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Layout: FC = () => {
    return (
        <button className={styles.main} type="button">
            <AccountCircleIcon style={{ color: "grey" }} /> My Profile
        </button>
    );
};

export default Layout;
