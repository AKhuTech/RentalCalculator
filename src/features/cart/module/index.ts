import { createSlice } from "@reduxjs/toolkit";

export const cartSlice: any = createSlice({
    name: "cart",
    initialState: {},
    reducers: {
        addProduct: (state: any, { payload }) => {
            state[payload] = (state[payload] || 0) + 1;
        },
        removeProduct: (state: any, { payload }) => {
            if (state[payload]) {
                state[payload] = state[payload] - 1;
            }
        },
        clear: () => cartSlice.getInitialState(),
    }
});