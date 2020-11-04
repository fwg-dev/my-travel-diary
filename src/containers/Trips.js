import React from 'react'; 
import './Trips.css';

const Trips = (props) => 
<div className="TripContainer">
  <h1>Trip</h1>
  {props.trips.map(trip => 
  <div className="TripDetails">
     <div key={trip.id} className="TripCard">
        <h3>{trip.title}</h3>
        <h5>{trip.city}, {trip.country}</h5>
        <h5>{trip.date_of_trip} </h5>
     </div>
  </div>

    )}
</div>;

export default Trips; 