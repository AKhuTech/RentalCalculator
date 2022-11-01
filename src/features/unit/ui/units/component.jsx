import { Outlet } from "react-router-dom";
import { UnitTabsContainer } from "../unit-tabs/container";

export const Units = ({ unitIds }) => {
    if (!unitIds?.length) {
        return null;
    }

    return (
        <div>
            <UnitTabsContainer />
            <Outlet />
        </div>
    );
};