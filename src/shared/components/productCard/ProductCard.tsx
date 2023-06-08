import { FC } from "react";
import styles from "./ProductCard.module.scss";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";

import React from "react";
import { ProductData } from "./types";

const ProductCard: FC<{ productData: ProductData }> = ({ productData }) => {
    return (
        <div className={styles.main}>
            <div className={styles.imageContainer}>
                <img src={productData?.image} alt="IMG" />
            </div>

            <div>
                <p>{productData?.title ?? ""}</p>
                <p>by {productData?.user ?? ""}</p>
                <div className={styles.viewsStatistic}>
                    <div>
                        <RemoveRedEyeOutlinedIcon />
                        {productData?.view ?? 0}K
                    </div>
                    <div>
                        <BookmarkBorderOutlinedIcon /> {productData?.saved ?? 0}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
