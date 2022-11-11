import vehicleActions from "../actions/vehicle.actions";

const actionMapper = {
    [vehicleActions.ADD]:(state, data)=>{
        return {value: [...state.value, data], filter:state.filter}
    },
    [vehicleActions.SET]:(state, data)=>{
        return {value: data, filter:state.filter}
    },
    [vehicleActions.FILTER]:(state, data)=> {
        return {value: state.value, filter:data}
    },
    "default": (state) => ({value: state.value, filter:state.filter})
}

const vehicleReducer = (state, action) => {
    if(action){
        return Object.keys(actionMapper).includes(action.type) ? 
        actionMapper[action.type](state, action.data) :
        actionMapper["default"](state);
    }
};

export default vehicleReducer;
