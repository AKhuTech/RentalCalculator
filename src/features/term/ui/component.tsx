import React, { FC } from "react";
import styles from "./styles.module.scss";

interface ProductProps {
    increment(): void,
    decrement(): void,
    qty: number,
}

export const Term: FC<ProductProps> = ({ increment, decrement, qty }) => {
    return (
        <div className={styles.root}>
            <div className={styles.label}>Rent Term, days</div>
            <div className={styles.actions}>
                <button
                    onClick={decrement}
                    className={styles.action}
                    disabled={qty <= 0}
                >
                    -
                </button>
                <span className={styles.count}>{qty}</span>
                <button
                    onClick={increment}
                    className={styles.action}
                    disabled={qty >= 90}
                >
                    +
                </button>
            </div>
        </div>
    );
};