import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartSlice } from "../../cart/module";
import { selectProductCount } from "../../cart/module/selectors";
import { selectProductNameById, selectProductPartNoById, selectProductPriceById } from "../../productsList/module/selectors";
import { Product } from "./component";

export const ProductContainer = ({ productId, ...props }) => {

    const dispatch = useDispatch();
    const count = useSelector(state => selectProductCount(state, productId));

    const productName = useSelector(state => selectProductNameById(state, productId));
    const productPrice = useSelector(state => selectProductPriceById(state, productId));
    const productPartNo = useSelector(state => selectProductPartNoById(state, productId));

    const decrement = useCallback(() => {
        dispatch(cartSlice.actions.removeProduct(productId));
    }, [productId, dispatch]);

    const increment = useCallback(() => {
        dispatch(cartSlice.actions.addProduct(productId));
    }, [productId, dispatch]);

    const subTotal = useMemo(() => {
        return productPrice * count
    }, [productPrice, count]);

    return <Product
        productName={productName}
        productPrice={productPrice}
        productPartNo={productPartNo}
        count={count}
        decrement={decrement}
        increment={increment}
        subTotal={subTotal}
        {...props}
    />;
};