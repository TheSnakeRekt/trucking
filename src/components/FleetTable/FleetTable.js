import styles from "./FleetTable.module.css";
import FleetItem from "../../UI/FleetItem";
import NewVehicle from "../NewVehicle/NewVehicle";
import VehicleFilter from "../VehicleFilter/VehicleFilter";
import vehicleActions from "../../actions/vehicle.actions";

const FleetTable = (props) => {
  const vehicles = props.data.vehicles

  return (
    <div className={styles["table-container"]}>
        <VehicleFilter
          brands={props.data.brands}
          onVehicleFilter={(val)=> props.data.dispatch({type:vehicleActions.FILTER, data: val})}
        />
      <div className={styles.table}>
        <table>
          <thead>
            <tr>{props.children}</tr>
          </thead>
          <tbody>
            {vehicles.map((truck) => (
              <FleetItem vehicle={truck} key={truck.id} />
            ))}
          </tbody>
        </table>
      </div>
      <NewVehicle
        onNewVehicle={(val) => {props.data.dispatch({type:vehicleActions.ADD, data: val})}}
        onAddClicked={props.data.addClickedHandler}
      />
    </div>
  );
};

export default FleetTable;
