import React, { FC } from "react";
import { numberWithSpaces } from "../../../productsList/module/number";
import { CartItemContainer } from "../cart-item/container";
import styles from "./styles.module.scss";

interface CartProps {
    productIds: string[],
    onClearCart: any,
    sum: number
};

export const Cart: FC<CartProps> = ({ productIds, onClearCart, sum }) => {
    return (
        <div className={styles.root}>
            <div className={styles.header}>
                Calculation Result
            </div>
            <div className={styles.label}>
                <div className={styles.productName}>Product Name</div>
                <div className={styles.productPartNo}>Part-No</div>
                <div className={styles.productPrice}>Price</div>
                <div className={styles.term}>Days</div>
                <div className={styles.count}>Qty</div>
                <div className={styles.sum}>Total</div>
            </div>
            <div className={styles.products}>
                {productIds?.length > 0 ?
                    (productIds.map(productId => (
                        <CartItemContainer
                            productId={productId}
                            className={styles.product}
                        />
                    ))) :
                    (<div className={styles.productName}><p>Empty</p></div>)
                }
            </div>
            <div className={styles.label}>
                <div className={styles.total}>TOTAL incl. VAT</div>
                <div className={styles.sum}>{numberWithSpaces(sum)}</div>
            </div>
            <button
                onClick={onClearCart}
                disabled={productIds?.length <= 0}
                className={styles.clearAction}
            >
                Clear Calculation
            </button>
        </div>
    );
};