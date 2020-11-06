export default (state = [], action) => {

  switch(action.type) {
    case 'GET_TRIPS_SUCCESS':
      return action.trips; 

      case 'CREATE_TRIP_SUCCESS':
      return state.concat(action.trip);

      default: 
      return state; 
  }
}