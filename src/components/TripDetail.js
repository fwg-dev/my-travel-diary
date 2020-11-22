import React from 'react'; 
// import { Redirect } from 'react-router-dom'; 
import PostsContainer from '../containers/PostsContainer.js'; 
import Trips from '../containers/Trips'; 


const TripDetail = (props) => {

console.log(props)
    let trip = props.trips[props.match.params.id -1]
    //let trip = props.trips.filter(trip => trip.id == props.match.params.id)[0]
   
console.log(trip)

  return ( 
    <div>
   
        <h2>
          {trip ? trip.title: null} 
        
          </h2>
      {/* <img  
      
      scr={trip? trip.img_url: null} 
      alt=""
      /> */}
    
        <div>
        <PostsContainer trip={trip} />
          
        </div>
    </div>

  )

}

export default TripDetail; 

//this trip component is rendering the posts container which holds the post input and posts associated with the trip 