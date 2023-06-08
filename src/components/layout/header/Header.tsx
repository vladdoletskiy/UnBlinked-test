import { FC } from "react";
import styles from "./Header.module.scss";
import ProfileBtn from "../../profile-btn/ProfileBtn";

const Header: FC = () => {
    return (
        <header className={styles.container}>
            <div className={styles.logo}>
                <img src="images/unblinked_logo.svg" alt="unblinked"></img>
            </div>
            <div className={styles.buttonBlock}>
                <button type="button">Create new dashboard</button>
                <button type="button">Create new app</button>
                <img src="icons\bellIcon.svg" alt="Bell"></img>
                <ProfileBtn />
            </div>
        </header>
    );
};

export default Header;
