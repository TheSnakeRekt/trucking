import "./NewVehicle.module.css";
import { useState } from "react";
import RoundButton from "../../UI/RoundButton";
import Form from "../../UI/Form";

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
  const [clicked, setClicked] = useState(false);

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
    newVehicleClickHandler();
  };

  const newVehicleClickHandler = () => {
    setClicked((state) => !state);
    props.onAddClicked();
  };

  return !clicked ? <RoundButton buttonClickHandler={newVehicleClickHandler}/> : <Form vehicle={vehicle} newVehicleClickHandler={newVehicleClickHandler} clickHandler={clickHandler} handleChange={handleChange} />;
};

export default NewVehicle;
