import FleetTable from "../components/FleetTable";


function Main() {
    const trucks = [{
        id:'1',
        brand: 'Mercedes',
        model: 'Caminhao',
        year: '2020',
        mileage: '250000',
        driver: 'Roberto',
        route: 'St. Cona do assobio'
    },{
        id:'2',
        brand: 'Mercedes',
        model: 'Caminhao',
        year: '2020',
        mileage: '250000',
        driver: 'Roberto',
        route: 'St. Cona do assobio'
    },{
        id:'3',
        brand: 'Mercedes',
        model: 'Caminhao',
        year: '2020',
        mileage: '250000',
        driver: 'Roberto',
        route: 'St. Cona do assobio'
    },{
        id:'4',
        brand: 'Mercedes',
        model: 'Caminhao',
        year: '2020',
        mileage: '250000',
        driver: 'Roberto',
        route: 'St. Cona do assobio'
    }];

    return (<FleetTable data={trucks}/>)
}

export default Main;