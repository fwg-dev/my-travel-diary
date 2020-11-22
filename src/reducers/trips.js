
export default (state = [], action) => {
debugger; 
  switch(action.type) {
    case 'GET_TRIPS_SUCCESS':
      return action.trips; 

      case 'CREATE_TRIP_SUCCESS':
      return state.concat(action.trip);
      case 'ADD_POST':
        let trips = state.trips.map(trip =>{
          if (trip.id === action.payload.id) {
             return action.payload
          }else {
            return trip
          }
        })
        return {...state, trips}

      default: 
      return state; 
  }
}