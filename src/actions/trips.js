// const { default: trips } = require("../reducers/trips");

import { resetTripForm } from './tripForm'; 

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

// Asynch Actions **
export const getTrips = () => {
  return dispatch => {
   return fetch(`${API_URL}/trips`)
     .then(response => response.json())
     .then(trips => dispatch(setTrips(trips)))
     .catch(error => console.log(error));

  }
}

export const createTrip = trip => {
  return dispatch => {
    return fetch(`${API_URL}/trips`,{
      method: "POST", 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ trip: trip })
    })

    .then(response => response.json())
    .then(trip => {
      dispatch(addTrip(trip))
      dispatch(resetTripForm())
  
    })
    .catch(error => console.log(error))
  }

  }


