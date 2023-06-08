import { FC, PropsWithChildren } from "react";
import styles from "./AppDescription.module.scss";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import React from "react";

const AppDescription: FC = () => {
    const [viewsCounter, setViewsCounter] = React.useState(0.8);
    const [dashboardCount, setDashboardCount] = React.useState(107);
    const [appCount, setAppCount] = React.useState(107);
    const [savedCounter, setSavedCounter] = React.useState(107);
    return (
        <div>
            <div className={styles.header}>
                <h3>App name</h3>
                <div className={styles.viewsCounter}>
                    <RemoveRedEyeOutlinedIcon />
                    {viewsCounter}K
                </div>
            </div>
            <div className={styles.controlBlock}>
                <div className={styles.userInfo}>
                    <AccountCircleIcon style={{ color: "grey" }} />
                    <div>
                        <h5>User Name</h5>
                        <h6>
                            Apps {appCount} Dashboards {dashboardCount}
                        </h6>
                    </div>
                </div>
                <div className={styles.controlBtn}>
                    <button>edit</button>
                    <button>fork</button>
                    <button>
                        <BookmarkBorderOutlinedIcon /> {savedCounter}
                    </button>
                </div>
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur. Vitae eget fermentum
                tellus elementum tortor vulputate pulvinar et suspendisse. Leo
                nibh platea sit quis id facilisis non dui. Turpis egestas vel
                sed felis scelerisque nunc turpis. Viverra amet morbi arcu ut
                placerat pharetra egestas. Diam in enim maecenas sit viverra
                egestas. Malesuada congue neque risus vitae hendrerit nascetur
                pellentesque in non. Arcu mattis pharetra vitae pellentesque
                nibh. Sagittis ultricies porta praesent volutpat sed sit egestas
                auctor commodo. Turpis tellus lectus gravida elementum penatibus
                sit. Nullam velit vitae venenatis ullamcorper sagittis accumsan.
                Eros facilisis nam suspendisse neque a turpis. Risus commodo
                curabitur fames cras arcu morbi.
            </p>
        </div>
    );
};

export default AppDescription;
