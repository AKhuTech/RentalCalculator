import { CartContainer } from "../../../cart/ui/cart/container";
import { ProductsContainer } from "../../../productsList/ui/container";
import { TermContainer } from "../../../term/ui/container";
import styles from "./styles.module.scss";

export const Unit = ({ unit }) => {
    return (
        <div className={styles.root}>
            <div>
                <img src={unit.unitImage} className={styles.unitImg} alt="Unit Image" />
            </div>
            <div className={styles.tab}>
                <TermContainer />
            </div>
            <div className={styles.tab}>
                <ProductsContainer unitId={unit.id} />
            </div>
            <div className={styles.tab}>
                <CartContainer />
            </div>
        </div>
    );
}