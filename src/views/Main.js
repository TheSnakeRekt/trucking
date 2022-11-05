import { useEffect, useState, useMemo } from "react";
import styles from "./Main.module.css";

import FleetTable from "../components/FleetTable/FleetTable";

function Main() {
  const trucks = useMemo(
    () => [
      {
        id: "1",
        brand: "Mercedes",
        model: "Truck",
        year: "2020",
        mileage: "250000",
        driver: "Roberto",
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
    ],
    []
  );

  const [clicked, setClicked] = useState(true);
  const [vehicles, setVehicles] = useState(trucks);
  const [brands, setBrands] = useState([
    ...new Set(vehicles.map((vehicle) => vehicle.brand)),
  ]);

  useEffect(() => {
    setBrands([...new Set(trucks.map((vehicle) => vehicle.brand))]);
  }, [trucks]);

  const newVehicleHandler = (vehicle) => {
    setVehicles((state) => {
      const brandSet = [
        ...state.map((vehicle) => vehicle.brand),
        vehicle.brand,
      ];

      setBrands([...new Set(brandSet)]);
      return [...state, vehicle];
    });
    trucks.push(vehicle);
  };

  const addClickedHandler = () => {
    setClicked((state) => !state);
  };

  const handleFilterEvent = (brandName) => {
    return brandName === "all"
      ? setVehicles(trucks)
      : setVehicles(trucks.filter((vehicle) => vehicle.brand === brandName));
  };

  const data = {
    vehicles: vehicles,
    handleFilterEvent: handleFilterEvent,
    addClickedHandler: addClickedHandler,
    newVehicleHandler: newVehicleHandler,
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
