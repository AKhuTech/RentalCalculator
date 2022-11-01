import { useSelector } from "react-redux";
import { numberWithSpaces } from "../../../productsList/module/number";
import { selectProductNameById, selectProductPartNoById, selectProductPriceById } from "../../../productsList/module/selectors";
import { selectTerm } from "../../../term/module/selectors";
import { selectProductCount } from "../../module/selectors";
import { CartItem } from "./component";

export const CartItemContainer = ({ productId, ...props }) => {
    const productName = useSelector(state => selectProductNameById(state, productId));
    const productPrice = useSelector(state => selectProductPriceById(state, productId));
    const productPartNo = useSelector(state => selectProductPartNoById(state, productId));
    const term = useSelector(state => selectTerm(state));
    const count = useSelector(state => selectProductCount(state, productId));
    const sum = numberWithSpaces(productPrice * count);

    return <CartItem
        productName={productName}
        productPrice={productPrice}
        productPartNo={productPartNo}
        term={term}
        count={count}
        sum={sum}
        {...props}
    />;
};