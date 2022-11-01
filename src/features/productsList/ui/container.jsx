import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSumPerDay } from "../../cart/module/selectors";
import { selectUnitProductsById } from "../../unit/module/selectors";
import { selectIsProductsLoading } from "../module/selectors";
import { loadProducts } from "../module/thunk/load-products";
import { ProductsList } from "./component";

export const ProductsContainer = ({ unitId }) => {

    const dispatch = useDispatch();
    const isProductLoading = useSelector(selectIsProductsLoading);
    const sum = useSelector(state => selectSumPerDay(state));

    useEffect(() => {
        dispatch(loadProducts(unitId));
    }, [unitId, dispatch]);

    const productIds = useSelector(state => selectUnitProductsById(state, { unitId }));

    return (
        isProductLoading ?
            <span>Loading</span> :
            <ProductsList productIds={productIds} sum={sum} />
    );
};