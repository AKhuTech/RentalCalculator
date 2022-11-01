import React, { FC, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartSlice } from "../../module";
import { selectOrderedProductIds, selectSum } from "../../module/selectors";
import { Cart } from "./component";

export const CartContainer: FC = (props: any) => {
    const dispatch = useDispatch();

    const productIds = useSelector(state => selectOrderedProductIds(state));
    const sum = useSelector(state => selectSum(state));

    const clearCartCallback = useCallback(
        () => dispatch(cartSlice.actions.clear()),
        [dispatch]
    );

    return (
        <Cart
            productIds={productIds}
            onClearCart={clearCartCallback}
            sum={sum}
        />
    );
};