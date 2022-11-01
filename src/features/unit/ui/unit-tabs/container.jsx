import { useSelector } from "react-redux";
import { selectUnitTabs } from "../../module/selectors";
import { Tabs } from "../../../tabs/ui/tabs/component";

export const UnitTabsContainer = (props) => {
  const tabs = useSelector(selectUnitTabs);

  return <Tabs tabs={tabs} {...props} />;
};