import { FC, PropsWithChildren } from "react";
import styles from "./CommentFeed.module.scss";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import React from "react";

const CommentFeed: FC = () => {
    const comments = [
        {
            user: "anonymous123",
            date: "00:00 3th May, 2022 (UTC0)",
            comment:
                "Lorem ipsum dolor sit amet consectetur. Vitae eget fermentum tellus elementum tortor vulputate pulvinar etLorem ipsum dolor sit amet consectetur. Vitae eget fermentum tellus elementum tortor vulputate pulvinar etLorem ipsum dolor sit amet consectetur. Vitae eget fermentum tellus elementum tortor vulputate pulvinar et",
        },
    ];

    const [commentsCounter, setCommentsCounter] = React.useState(7);
    return (
        <div>
            <div className={styles.userCommentPanel}>
                <h5>anonymous123</h5>
                <div>
                    <input type="text" />
                    <button type="button">Add</button>
                </div>
            </div>
            <div>
                <div className={styles.commentBlockTitle}>
                    Comments
                    <h3>{commentsCounter}</h3>
                </div>
                {comments.map((comment) => (
                    <div className={styles.commentSection}>
                        <div>
                            <AccountCircleIcon />
                            <h6>{comment.user}</h6>
                        </div>
                        <p>{comment.comment}</p>
                        <p>{comment.date}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CommentFeed;
