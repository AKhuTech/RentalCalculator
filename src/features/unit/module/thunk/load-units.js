import { unitSlice } from "../index";
import { selectUnitIds } from "../selectors";

export function loadUnits() {
    return function (dispatch, getState) {
        const unitIds = selectUnitIds(getState());

        if (unitIds?.length) {
            return;
        }

        dispatch(unitSlice.actions.startLoading(null));

        fetch("http://localhost:3001/api/units")
            .then((response) => response.json())
            .then((units) => {
                dispatch(unitSlice.actions.finishLoading(units));
            })
            .catch((error) => {
                dispatch(unitSlice.actions.failLoading(error));
            });
    };
}
