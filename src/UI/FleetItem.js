import './FleetItem.module.css'

const FleetItem = (props) => {
  const vehicle = props.vehicle;


  return (
    <tr>
      <td>{vehicle.id}</td>
      <td>{vehicle.brand}</td>
      <td>
        {vehicle.model} | {vehicle.year}
      </td>
      <td>{vehicle.mileage}</td>
      <td>{vehicle.driver}</td>
      <td>{vehicle.route}</td>
    </tr>
  );
};

export default FleetItem;
