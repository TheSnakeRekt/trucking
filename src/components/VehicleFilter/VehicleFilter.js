import styles from './VehicleFilter.module.css'

const VehicleFilter = (props) => {
    const brands = props.brands;

    const changeHandler = (event) => {
        props.onVehicleFilter(event.target.value);
    };

    return (<div className={styles.filter}>
        <select onChange={changeHandler}>
            <option disabled>Select a Brand</option>
            <option value="" defaultValue>No filter</option>
            {brands.map((brand, ind)=>(<option value={brand} key={ind}>{brand}</option>))}
        </select>
    </div>);
}

export default VehicleFilter;