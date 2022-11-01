import classNames from "classnames";
import { numberWithSpaces } from "../../productsList/module/number";
import styles from "./styles.module.scss"

export const Product = ({
  productName,
  productPrice,
  productPartNo,
  count,
  increment,
  decrement,
  subTotal,
  className }) => {

  return (
    <div className={classNames(styles.root, className)}>
      <div className={styles.productPartNo}>{productPartNo}</div>
      <div className={styles.productName}>{productName}</div>
      <div className={styles.productPrice}>{!productPrice ? 0 : numberWithSpaces(productPrice)}</div>
      <div className={styles.actions}>
        <button
          onClick={decrement}
          className={styles.action}
          disabled={count <= 0}
        >
          -
        </button>
        <div className={styles.count}>{count}</div>
        <button
          onClick={increment}
          className={styles.action}
          disabled={count >= 25}
        >
          +
        </button>
      </div>
      <div className={styles.subTotal}>{numberWithSpaces(subTotal)}</div>
    </div>
  );
};