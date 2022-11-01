import React, { FC, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { termSlice } from "../module";
import { selectTerm } from "../module/selectors";
import { Term } from "./component";

export const TermContainer: FC = () => {
    const dispatch = useDispatch();
    const count = useSelector(state => selectTerm(state));

    const decrement = useCallback(() => {
        console.log("DECREM");
        dispatch(termSlice.actions.removeDay());
    }, [dispatch]);

    const increment = useCallback(() => {
        dispatch(termSlice.actions.addDay());
    }, [dispatch]);

    return <Term
        increment={increment}
        decrement={decrement}
        qty={count}
    />;
}