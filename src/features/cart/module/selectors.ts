import { selectProductPriceById } from "../../productsList/module/selectors";
import { selectTerm } from "../../term/module/selectors";

export const selectCart = (state: any) => state.cart;

export const selectProductCount = (state: any, productId: string) => {
    const cart = selectCart(state);

    return cart[productId] || 0;
};

export const selectOrderedProductIds = (state: any) => {
    const cart = selectCart(state);

    return Object.keys(cart);
};

export const selectSumPerDay = (state: any) => {
    const cart = selectCart(state);
    let sum = 0;

    if (JSON.stringify(cart) !== "{}"){
        for(let item in cart){
            const price = selectProductPriceById(state, item);
            sum += cart[item] * price;
        }
        return sum;
    }

    return 0;
}

export const selectSum = (state: any) => {
    const sumPerDay: number = selectSumPerDay(state);
    const term: number = selectTerm(state);
    if (sumPerDay && term) {
        return sumPerDay * term;
    }
    return 0;
}