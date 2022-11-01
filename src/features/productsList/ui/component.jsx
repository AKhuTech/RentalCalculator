import { ProductContainer } from "../../product/ui/container";
import { numberWithSpaces } from "../module/number";
import styles from "./styles.module.scss"

export const ProductsList = ({ productIds, sum }) => {
    return (
        <div className={styles.root}>
            <div className={styles.header}>Select options</div>
            <div className={styles.label}>
                <div className={styles.partno}>Part-No</div>
                <div className={styles.name}>Product Name</div>
                <div className={styles.price}>Price</div>
                <div className={styles.qty}>Qty</div>
                <div className={styles.total}>Total per day</div>
            </div>
            {
                productIds.map(productId => {
                    return <ProductContainer
                        productId={productId}
                        className={styles.product}
                    />
                })
            }
            <div className={styles.footer}>
                <div className={styles.footer_sum}>TOTAL incl. VAT</div>
                <div className={styles.footer_value}>{numberWithSpaces(sum)}</div>
            </div>
        </div>
    );
};