import { useState } from "react";

import FleetTable from "../components/FleetTable/FleetTable";
import NewVehicle from "../components/NewVehicle/NewVehicle";

function Main() {
    const trucks = [{
        id:'1',
        brand: 'Mercedes',
        model: 'Truck',
        year: '2020',
        mileage: '250000',
        driver: 'Roberto',
        route: 'ACME'
    },{
        id:'2',
        brand: 'Mercedes',
        model: 'Truck',
        year: '2020',
        mileage: '250000',
        driver: 'Roberto',
        route: 'Porto -> Lisbon'
    },{
        id:'3',
        brand: 'Mercedes',
        model: 'Truck',
        year: '2020',
        mileage: '250000',
        driver: 'Roberto',
        route: 'Random Route'
    },{
        id:'4',
        brand: 'Mercedes',
        model: 'Truck',
        year: '2020',
        mileage: '250000',
        driver: 'Some guy',
        route: 'St. Adriao'
    }];

    const [vehicles, setVehicles] = useState(trucks);

    const NewVehicleHandler = (vehicle)=> {
        setVehicles(state=>([...state, vehicle]));
    }

    return (<div>
        <FleetTable data={vehicles}/>
        <NewVehicle onNewVehicle={NewVehicleHandler}></NewVehicle>
    </div>

    )
}

export default Main;