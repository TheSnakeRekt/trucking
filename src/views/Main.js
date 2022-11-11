import { useEffect, useState, useReducer, useMemo } from "react";
import styles from "./Main.module.css";

import FleetTable from "../components/FleetTable/FleetTable";
import vehicleReducer from "../reducers/vehicle.reducer";


function Main() {

  const trucks = useMemo(()=>[
    {
      id: "1",
      brand: "Mercedes",
      model: "Truck",
      year: "2020",
      mileage: "250000",
      driver: "Alejandro",
      route: "ACME",
    },
    {
      id: "2",
      brand: "VW",
      model: "Truck",
      year: "2020",
      mileage: "250000",
      driver: "Roberto",
      route: "Porto -> Lisbon",
    },
    {
      id: "3",
      brand: "Ford",
      model: "Truck",
      year: "2020",
      mileage: "250000",
      driver: "Roberto",
      route: "Random Route",
    },
    {
      id: "4",
      brand: "Mercedes",
      model: "Truck",
      year: "2020",
      mileage: "250000",
      driver: "Some guy",
      route: "St. Adriao",
    },
  ], []);

  const [clicked, setClicked] = useState(true);
  const [vehicles, dispatch] = useReducer(vehicleReducer, {
    value: trucks,
    filter: "",
  });

  const [brands, setBrands] = useState([
    ...new Set(vehicles.value?.map((vehicle) => vehicle.brand)),
  ]);

  useEffect(() => {
    setBrands([...new Set(vehicles.value.map((vehicle) => vehicle.brand))]);
  }, [vehicles.value]);

  const addClickedHandler = () => {
    setClicked((state) => !state);
  };

  const filteredVehicles = vehicles.value.filter(vehicle=>vehicle.brand.toLowerCase().includes(vehicles.filter.toLowerCase()));

  const data = {
    vehicles: filteredVehicles,
    dispatch: dispatch,
    addClickedHandler: addClickedHandler,
    brands: brands,
    clicked: clicked,
  };

  return (
    <div className={styles.container}>
      <FleetTable data={data}>
        <th>License Plate</th>
        <th>Brand</th>
        <th>Model & Year</th>
        <th>Mileage</th>
        <th>Driver</th>
        <th>Route</th>
      </FleetTable>
    </div>
  );
}

export default Main;
