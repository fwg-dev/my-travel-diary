import React from 'react'; 
import {Route, Link} from 'react-router-dom'; 



const TripCard = ({ trip }) => (
  <div className="TripDetails">
     <div key={trip.id} className="TripCard">
      <div>
        <img className= "TripImage" src={trip.img_url} alt={trip.title} />
      </div>
      <Link to={`/trips/${trip.id}`}> {trip.title}</Link>
        <h5>{trip.city}, {trip.country}</h5>
        <h5>{trip.date_of_trip} </h5>
        {/* <h5>{trip.user_id} </h5> */}
        <div>
          {/* <button name='delete'className="Trash"> Delete</button> */}
          {/* <button name='edit'className="Edit">Edit</button> */}
       </div>
      </div>
  </div>
)

export default TripCard;