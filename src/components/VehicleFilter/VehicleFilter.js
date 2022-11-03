

const VehicleFilter = (props) => {
    const brands = props.vehicles.map(vehicle=>(vehicle.brand));

    const changeHandler = (event) => {
        props.onVehicleFilter(event.target.value);
    };

    return (<div>
        <select onChange={changeHandler}>
            <option disabled>Select a Brand</option>
            <option value="all">No filter</option>
            {brands.map((brand, ind)=>(<option value={brand} key={ind}>{brand}</option>))}
        </select>
    </div>);
}

export default VehicleFilter;