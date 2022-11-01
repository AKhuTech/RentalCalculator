import { createSlice } from "@reduxjs/toolkit";

export const termSlice = createSlice({
    name: "term",
    initialState: 0,
    reducers: {
        addDay: (state) => {
            if (state< 90){
                return state = (state || 0) + 1;
            }
            return state;
        },
        removeDay: (state) => {
            if (state) {
                return state = state - 1;
            }
        }
    }
});