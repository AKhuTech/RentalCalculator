import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsUnitsLoading, selectUnitIds } from "../../module/selectors";
import { loadUnits } from "../../module/thunk/load-units";
import { Units } from "./component";

export const UnitsContainer = () => {
    const dispatch = useDispatch();
    const unitIds = useSelector(selectUnitIds);
    const isUnitLoading = useSelector(selectIsUnitsLoading);

    useEffect(() => {
        dispatch(loadUnits());
      }, [dispatch]);

      return isUnitLoading ? (
        <span>Loading</span>
      ) : (
        <Units unitIds={unitIds}/>
      );
    };