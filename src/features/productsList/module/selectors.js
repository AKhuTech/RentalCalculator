export const selectProductModuleState = (state) => state.product;

export const selectProductById = (state, productId) =>
  selectProductModuleState(state).entities[productId];

export const selectProductNameById = (state, productId) =>
  selectProductModuleState(state).entities[productId]?.productName;

export const selectProductPriceById = (state, productId) =>
  selectProductModuleState(state).entities[productId]?.productPrice;

export const selectProductPartNoById = (state, productId) =>
  selectProductModuleState(state).entities[productId]?.productPartNo;

export const selectProductIds = (state) => selectProductModuleState(state).ids;

export const selectIsProductsLoading = (state) =>
  selectProductModuleState(state).isLoading;