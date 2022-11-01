import { createSelector } from "reselect";
import { ROUTES } from "../../../constants/routes";

export const selectUnitModuleState = (state) => state.units;

export const selectUnitById = (state, payload) =>
  selectUnitModuleState(state).entities[payload.unitId];

export const selectUnitProductsById = (state, payload) =>
  selectUnitModuleState(state)?.entities[payload.unitId]?.unitProducts ||
  [];

export const selectUnits = (state) =>
  Object.values(selectUnitModuleState(state).entities);

export const selectUnitIds = createSelector(
  [selectUnitModuleState],
  (unitModuleState) => unitModuleState.ids
);

export const selectIsUnitsLoading = (state) =>
  selectUnitModuleState(state).isLoading;

export const selectUnitTabs = (state) =>
  Object.values(selectUnitModuleState(state).entities).map(
    ({ unitName, id }) => ({
      label: unitName,
      id,
      href: `/${ROUTES.Units}/${id}`,
    })
  );