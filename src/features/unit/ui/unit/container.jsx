import { useSelector } from "react-redux";
import { selectUnitById } from "../../module/selectors";
import { useParams } from "react-router-dom";
import { Unit } from "./component";

export const UnitContainer = ({ ...props }) => {
  const { unitId } = useParams();
  
  const unit = useSelector((state) =>
    selectUnitById(state, { unitId })
  );

  return <Unit unit={unit} />;
};