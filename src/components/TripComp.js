import React from 'react'
import TripCard from './TripCard'

import TripDetail from './TripDetail';

const TripsComp = (props) => {

  return (
    <div>
    <div className="TripContainer"> 
    {/* <TripInput /> */}
       {props.trips.map(trip => <TripCard key={trip.id} trip={trip} />)} 
    </div>
   </div>

  )
}

export default TripsComp; 