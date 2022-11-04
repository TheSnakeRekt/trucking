import styles from "./FleetTable.module.css";
import FleetAtom from "../../atoms/FleetAtom";

const FleetTable = (props) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>License Plate</th>
          <th>Brand</th>
          <th>Model & Year</th>
          <th>Mileage</th>
          <th>Driver</th>
          <th>Route</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((truck) => (
          <FleetAtom vehicle={truck} key={truck.id} />
        ))}
      </tbody>
    </table>
  );
};

export default FleetTable;
