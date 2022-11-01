import classNames from "classnames";
import { numberWithSpaces } from "../../../productsList/module/number";
import styles from "./styles.module.scss";

export const CartItem = ({ productName, productPartNo, productPrice, count, term, sum, className }) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.productName}>{productName}</div>
            <div className={styles.productPartNo}>{productPartNo}</div>
            <div className={styles.productPrice}>{numberWithSpaces(productPrice)}</div>
            <div className={styles.term}>{term}</div>
            <div className={styles.count}>{count}</div>
            <div className={styles.sum}>{sum}</div>
        </div>
    );
};