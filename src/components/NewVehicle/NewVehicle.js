import "./NewVehicle.module.css";
import { Fragment, useState } from "react";
import RoundButton from "../../UI/RoundButton";
import { ModalRef } from "../../UI/Modal";

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

  return !clicked ? (
    <RoundButton buttonClickHandler={newVehicleClickHandler} />
  ) : (
    <Fragment>
      <RoundButton buttonClickHandler={newVehicleClickHandler} />
      <ModalRef
        onConfirm={newVehicleClickHandler}
        vehicle={vehicle}
        newVehicleClickHandler={newVehicleClickHandler}
        clickHandler={clickHandler}
        handleChange={handleChange}
      ></ModalRef>
    </Fragment>
  );
};

export default NewVehicle;
