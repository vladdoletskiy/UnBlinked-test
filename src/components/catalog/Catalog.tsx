import { FC } from "react";
import styles from "./Catalog.module.scss";

import React from "react";
import ProductCard from "../../shared/components/productCard/ProductCard";

const Catalog: FC = () => {
    const product = [
        {
            image: "https://bipbap.ru/wp-content/uploads/2017/04/000f_7290754.jpg",
            title: "dash name",
            user: "User Name",
            view: 0.8,
            saved: 107,
        },
        {
            image: "https://bipbap.ru/wp-content/uploads/2017/04/000f_7290754.jpg",
            title: "dash name",
            user: "User Name",
            view: 0.8,
            saved: 107,
        },
        {
            image: "https://bipbap.ru/wp-content/uploads/2017/04/000f_7290754.jpg",
            title: "dash name",
            user: "User Name",
            view: 0.8,
            saved: 107,
        },
        {
            image: "https://bipbap.ru/wp-content/uploads/2017/04/000f_7290754.jpg",
            title: "dash name",
            user: "User Name",
            view: 0.8,
            saved: 107,
        },
        {
            image: "https://bipbap.ru/wp-content/uploads/2017/04/000f_7290754.jpg",
            title: "dash name",
            user: "User Name",
            view: 0.8,
            saved: 107,
        },
        {
            image: "https://bipbap.ru/wp-content/uploads/2017/04/000f_7290754.jpg",
            title: "dash name",
            user: "User Name",
            view: 0.8,
            saved: 107,
        },
        {
            image: "https://bipbap.ru/wp-content/uploads/2017/04/000f_7290754.jpg",
            title: "dash name",
            user: "User Name",
            view: 0.8,
            saved: 107,
        },
        {
            image: "https://bipbap.ru/wp-content/uploads/2017/04/000f_7290754.jpg",
            title: "dash name",
            user: "User Name",
            view: 0.8,
            saved: 107,
        },
    ];

    return (
        <div>
            <h3>Show similar</h3>
            <div className={styles.main}>
                {product.map((p) => (
                    <ProductCard productData={p} />
                ))}
            </div>
        </div>
    );
};

export default Catalog;
