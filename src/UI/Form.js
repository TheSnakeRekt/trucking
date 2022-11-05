import styles from "./Form.module.css";

const Form = (props) => (
  <div className={styles["form-container"]}>
    <form onSubmit={props.clickHandler}>
      <div>
        <span>
          <label htmlFor="id">License Plate</label>
          <input
            id="id"
            value={props.vehicle.id}
            onChange={props.handleChange}
          />
        </span>
        <span>
          <label htmlFor="brand">Brand</label>
          <input
            id="brand"
            value={props.vehicle.brand}
            onChange={props.handleChange}
          />
        </span>
      </div>
      <div>
        <span>
          <label htmlFor="model">Model</label>
          <input
            id="model"
            value={props.vehicle.model}
            onChange={props.handleChange}
          />
        </span>
        <span>
          <label htmlFor="year">Year</label>
          <input
            id="year"
            value={props.vehicle.year}
            onChange={props.handleChange}
          />
        </span>
      </div>
      <div>
        <span>
          <label htmlFor="mileage">Mileage</label>
          <input
            id="mileage"
            value={props.vehicle.mileage}
            onChange={props.handleChange}
          />
        </span>
        <span>
          <label htmlFor="driver">Driver</label>
          <input
            id="driver"
            value={props.vehicle.driver}
            onChange={props.handleChange}
          />
        </span>
      </div>
      <div>
        <span>
          <label htmlFor="route">Route</label>
          <input
            id="route"
            value={props.vehicle.route}
            onChange={props.handleChange}
          />
        </span>
      </div>
      <div>
        <button type="submit">Create</button>
        <button
          type="button"
          className={styles["cancel-button"]}
          onClick={props.newVehicleClickHandler}
        >
          Cancel
        </button>
      </div>
    </form>
  </div>
);

export default Form;