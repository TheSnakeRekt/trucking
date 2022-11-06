import styles from "./Modal.module.css";
import { createPortal } from "react-dom";
import { Fragment } from "react";
import Form from "./Form";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onConfirm} />;
};

const Modal = (props) => {
  return (
    <div className={styles["modal-container"]}>
      <Form
        vehicle={props.vehicle}
        newVehicleClickHandler={props.newVehicleClickHandler}
        clickHandler={props.clickHandler}
        handleChange={props.handleChange}
      />
    </div>
  );
};

export const ModalRef = (props) => {
  return (
    <Fragment>
      {createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop")
      )}
      {createPortal(
        <Modal
          onConfirm={props.onConfirm}
          vehicle={props.vehicle}
          newVehicleClickHandler={props.newVehicleClickHandler}
          clickHandler={props.clickHandler}
          handleChange={props.handleChange}
        />,
        document.getElementById("overlay")
      )}
    </Fragment>
  );
};
