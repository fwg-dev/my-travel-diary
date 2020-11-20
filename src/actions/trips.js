// const { default: trips } = require("../reducers/trips");
// import { resetTripForm } from './tripForm'; 

const API_URL = process.env.REACT_APP_API_URL;

//  Action creators **
const setTrips = trips => {
  return {
    type: 'GET_TRIPS_SUCCESS',
    trips
  }
}


const addTrip = trip => {
  return {
    type: 'CREATE_TRIP_SUCCESS',
    trip
  }
}

// Async Actions **
export const getTrips = () => {
  return dispatch => {
   return fetch(`${API_URL}/trips`)
     .then(response => response.json())
     .then(trips => dispatch(setTrips(trips)))
     .catch(error => console.log(error));

  }
}
//without thunk, we cannot use our dispatch inside the function 
//dispatch updates the redux store 
//dispatch(setTrips(trips))) - we are using this to dispatch our action  
//vid 5 38:27
export const createTrip = trip => {
  // debugger;
  return dispatch => {
    return fetch(`${API_URL}/trips`,{
      method: "POST", 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(trip)
    })

    .then(response => response.json())
    .then(trip => dispatch(addTrip(trip)))
    .catch(error => console.log(error))
  }

  }


