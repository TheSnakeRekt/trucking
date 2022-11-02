import './FleetTable.css'
import FleetAtom from "../atoms/FleetAtom";



const FleetTable = (props) => {
    return (
        <table>
            <thead>
                <th>License Plate</th>
                <th>Brand</th>
                <th>Model & Year</th>
                <th>Mileage</th>
                <th>Driver</th>
                <th>Route</th>
            </thead>
            <tbody>
                    {
                        props.data.map(truck => <FleetAtom vehicle={truck}/>)
                    }
            </tbody>
        </table>
    )
}

export default FleetTable;