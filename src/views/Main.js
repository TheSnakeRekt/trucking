import { useState } from "react";
import "./Main.css";

import FleetTable from "../components/FleetTable/FleetTable";
import NewVehicle from "../components/NewVehicle/NewVehicle";
import VehicleFilter from "../components/VehicleFilter/VehicleFilter";

function Main() {
  const trucks = [
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
  ];

  const [clicked, setClicked] = useState(true);
  const [vehicles, setVehicles] = useState(trucks);

  const newVehicleHandler = (vehicle) => {
    setVehicles((state) => [...state, vehicle]);
  };

  const addClickedHandler = () => {
    setClicked(state=>(!state));
  }

  const handleFilterEvent = (brandName) => {
    brandName === 'all' ? setVehicles(trucks) : setVehicles(trucks.filter((vehicle) => vehicle.brand === brandName));
  };

  return (
    <div className="container">
      <div>
        <NewVehicle onNewVehicle={newVehicleHandler} onAddClicked={addClickedHandler}/>
        {clicked && <VehicleFilter
          vehicles={trucks}
          onVehicleFilter={handleFilterEvent}
        />}
      </div>
      <FleetTable data={vehicles} />
    </div>
  );
}

export default Main;
