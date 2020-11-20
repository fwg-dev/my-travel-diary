import React from 'react'; 
import { Redirect } from 'react-router-dom'; 
import PostsContainer from '../containers/PostsContainer.js'; 
import Trips from '../containers/Trips'; 

const Trip = (props) => {

  // let trip = props.trips[props.match.params.id -1]
  // let trip = props.trips.filter(trip => trip.id == props.match.params.id)[0]

  return ( 
    <div>
       {/* <div>
        {trip.img_url} - {trip.title}
       </div> */}
       <div>
          <h1>Hello from Post Container  </h1>
           <PostsContainer  />
        </div>
    </div>

  )

}

export default Trip; 

//this trip component is rendering the posts container which holds the post input and posts associated with the trip 