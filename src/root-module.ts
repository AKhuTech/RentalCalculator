import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./features/cart/module";
import { productSlice } from "./features/productsList/module";
import { termSlice } from "./features/term/module";
import { unitSlice } from "./features/unit/module";

/* const actionLogger = (store: any) => (next: any) => (action: any) => {
    console.log("action: ", action);
    return next(action);
}; */

const rootReducer = combineReducers({
    cart: cartSlice.reducer,
    term: termSlice.reducer,
    units: unitSlice.reducer,
    product: productSlice.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: true
})