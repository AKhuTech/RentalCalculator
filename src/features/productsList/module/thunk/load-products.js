import { selectProductIds } from "../selectors";
import { productSlice } from "../index";
import { selectUnitProductsById } from "../../../unit/module/selectors";

export function loadProducts(unitId) {
  return function (dispatch, getState) {
    const productIds = selectProductIds(getState());
    const unitProducts = selectUnitProductsById(getState(), {
      unitId,
    });

    if (
      unitProducts.every((productId) => productIds.includes(productId))
    ) {
      return;
    }

    dispatch(productSlice.actions.startLoading(null));

    fetch(
      `http://localhost:3001/api/products?${new URLSearchParams({
        id: unitId,
      }).toString()}`
    )
      .then((response) => response.json())
      .then((products) => {
        dispatch(productSlice.actions.finishLoading(products));
      })
      .catch((error) => {
        dispatch(productSlice.actions.failLoading(error));
      });
  };
}