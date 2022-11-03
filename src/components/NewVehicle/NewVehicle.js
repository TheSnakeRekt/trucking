import "./NewVehicle.css";
import { useState } from "react";

const NewVehicle = (props) => {
  const originalState = {
    id: "",
    brand: "",
    model: "",
    year: "",
    mileage: "",
    driver: "",
    route: "",
  };

  const [vehicle, setVehicle] = useState(originalState);

  const handleChange = (event) => {
    setVehicle((state) => ({
      ...state,
      [event.target.id]: event.target.value,
    }));
  };

  const clickHandler = (event) => {
    event.preventDefault();
    props.onNewVehicle(vehicle);
    setVehicle(originalState);
  };

  return (
    <form onSubmit={clickHandler}>
      <div>
        <span>
          <label htmlFor="id">License Plate:</label>
          <input id="id" value={vehicle.id} onChange={handleChange} />
        </span>
        <span>
          <label htmlFor="brand">Brand:</label>
          <input id="brand" value={vehicle.brand} onChange={handleChange} />
        </span>
      </div>
      <div>
        <span>
          <label htmlFor="model">Model:</label>
          <input id="model" value={vehicle.model} onChange={handleChange} />
        </span>
        <span>
          <label htmlFor="year">Year:</label>
          <input id="year" value={vehicle.year} onChange={handleChange} />
        </span>
      </div>
      <div>
        <span>
          <label htmlFor="mileage">Mileage:</label>
          <input id="mileage" value={vehicle.mileage} onChange={handleChange} />
        </span>
        <span>
          <label htmlFor="driver">Driver:</label>
          <input id="driver" value={vehicle.driver} onChange={handleChange} />
        </span>
      </div>
      <div>
        <span>
          <label htmlFor="route">Route:</label>
          <input id="route" value={vehicle.route} onChange={handleChange} />
        </span>
      </div>
      <div>
        <button type="submit">Create</button>
      </div>
    </form>
  );
};

export default NewVehicle;
