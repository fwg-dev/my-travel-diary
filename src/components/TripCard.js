import React from 'react'; 


const TripCard = ({ trip }) => (
  <div className="TripDetails">
     <div key={trip.id} className="TripCard">
        <img className= "TripImage" src={trip.img_url} alt={trip.title} />
        <h3>{trip.title}</h3>
        <h5>{trip.city}, {trip.country}</h5>
        <h5>{trip.date_of_trip} </h5>
     </div>
  </div>
)
export default TripCard; 