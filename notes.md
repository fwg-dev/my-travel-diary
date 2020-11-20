{
title: "NairobiNational Park",
city: "Nairobi",
country: "Kenya",
date_of_trip: "12/9/2019",
user: "Faith G.",
trip_picture: "https://images.unsplash.com/photo-1567923964194-b3329e967a8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"

},

{
title: "Day at the beach",
city: "Mombasa",
country: "Kenya",
date_of_trip: "12/29/2019",
user: "Faith G.",
trip_picture: "https://images.unsplash.com/photo-1558462610-cf8d1b0248a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"

}

.TripCard {
border: 3px solid darkbrown;
height: 300px;
width: 250px;
margin: 20px;
text-align: center;
position: relative;
border-radius: 5px;
}

.TripContainer {
display: flex;
flex-wrap: wrap;
justify-content: center;
max-width: 1200px;
margin: auto;
}

---

const trips = [
{
title: "Nairobi National Park",
city: "Nairobi",
country: "Kenya",
date_of_trip: "12/9/2019",
user: "Faith G.",
trip_picture: "https://images.unsplash.com/photo-1567923964194-b3329e967a8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"

},

{
title: "Day at the beach",
city: "Mombasa",
country: "Kenya",
date_of_trip: "12/29/2019",
user: "Faith G.",
trip_picture: "https://images.unsplash.com/photo-1558462610-cf8d1b0248a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"

},

{
title: "Day at the beach",
city: "Malindi",
country: "Kenya",
date_of_trip: "12/2/2019",
user: "Faith G.",
trip_picture: "https://images.unsplash.com/photo-1506691503926-6f8b1e0690d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"

},

{
title: "A Cruise in the Ocean",
city: "Malindi",
country: "Kenya",
date_of_trip: "11/29/2019",
user: "Faith G.",
trip_picture: "https://images.unsplash.com/flagged/photo-1579005433035-fa39d94b43ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80"

}

## ]

---

 <div className="TripDetails">
     <div className="TripCard">
        <img className= "TripImage" src={trip.trip_picture} alt={trip.title} />
        <h3>{trip.title}</h3>
        <h4>{trip.city}, {trip.country}</h4>
        <h5>{trip.date_of_trip}, {trip.user} </h5>
     </div>
  </div>

---

// Redux Store- collection of trips
var store = {
trips:[
{...}

],
tripFormData: [
{
title: '',
city: '',
country: '',
date_of_trip: '',
}
],

currentTrip: {
//this will select a specific trip = /trip/:id

}

}

---

## // we user thunk to make asynch calls to our backend

---

this is info about the surfboards before we moved everything to redux

constructor(props) {
super(props)

     this.state = {
       trips: []
     }

}

---

// import React from 'react'

// const Navbar => () =>
// <div>

// </div>

## // export default Navbar

---

<a href="#NewForm">Add Trip</a>

---

<div>
          <p>
          { user? 
                `${user.username} is logged in` :  "No one is logged" 
          }

          </p>
                      <Trips />

            <button onClick={login}> Log in </button>

      </div>

    );

}

---

  <div>
            <label htmlFor="user_id">Pick a user: </label>
            <select
            <option value="select">Select</option>
              <option value="select">Faith</option>
              
              
              onChange ={this.handleOnChange}
                name="user_id"
                value={user_id}
                />
          </div>

---

// componentDidMount() {
// fetch('http://localhost:3001/api/vi/users',{
// method: 'GET'
// })
// .then(res => res.json())
// .then(data => console.log(data))

// }

---

log-in/signup page

const MainProfile = styled.main`
min-height: 80vh;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
grid-column-gap: 3rem;
grid-row-gap: 5rem;

## `;

trip input
import React from 'react';
import {connect} from 'react-redux'
//import action
import { createTrip } from '../actions/trips';

class TripInput extends React.Component {

render(){

return(

state={
img_url: '',
title: '',
city: '',
country: '',
date_of_trip: '',
img_url: '',
}

  <div>
     <div>
         <div className="title">
             <b> Add a Trip </b>

         </div>
         <form>
             <form>

                 <div>
                     <label htmlFor="img_url">Upload Image: </label>
                     <input type="text" name="img_url" value={img_url} />
                 </div>

                 <div>
                     <label htmlFor="title">Title: </label>
                     <input type="text" name="title" value={title} />
                 </div>
                 <div>
                     <label htmlFor="city">City: </label>
                     <input type="text" name="city" value={city} />
                 </div>

                 <div>
                     <label htmlFor="country">Country: </label>
                     <input type="text" name="country" value={country} />
                 </div>

                 <div>
                     <label htmlFor="date_of_trip">Date: </label>
                     <input type="date" name="date_of_trip" value={date_of_trip} />
                 </div>
                 <button className="AddTrip" type="submit">Add Trip</button>
             </form>
         </form>
     </div>

)
}

}

export default connect(null, {createTrip})(TripInput);

---

export const createTrip = trip => {
// debugger;
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
      debugger
      // dispatch(resetTripForm())

    })
    .catch(error => console.log(error))

}

## }

import React, { Component } from 'react';
import { connect } from 'react-redux';

// import TripCard from '../components/TripCard';

import Trip from '../components/Trip';
import TripsComp from '../components/TripsComp';

import { getTrips } from '../actions/trips';
import TripInput from '../components/TripInput';

import { Route, Switch } from 'react-router-dom';

import './Trips.css';
class Trips extends Component {

componentDidMount() {
this.props.getTrips()
}

     render(){
      return(

     <div>
            <Switch>

             <Route path='/trips/:id' render={(routerProps) => <Trip {...routerProps} accounts={this.props.trips}/>}/>
             <Route path='/trips/:id' render={(routerProps) => <TripsComp {...routerProps} accounts={this.props.trips}/>}/>


            </Switch>
         {/* {this.props.trips.map(trip => <TripCard key={trip.id} trip={trip} />)} */}
         {/* <Route path='/trips/:id' render={(routerProps) => <Trip {...routerProps} accounts={this.props.trips}/>}/>
         <Route path='/trips/:id' render={(routerProps) => <TripsComp {...routerProps} accounts={this.props.trips}/>}/>
           */}

         {/* <Route path='/accounts/new' component={AccountInput}/>
              <Route path='/accounts/:id' render={(routerProps) => <Account {...routerProps} accounts={this.props.accounts}/>}/>
              <Route path='/accounts' render={(routerProps) => <Accounts {...routerProps} accounts={this.props.accounts}/>}/> */}
      </div>

);

}
}

const mapStateToProps = (state) => {
return({
trips: state.trips
})
}

export default connect(mapStateToProps, { getTrips } )(Trips);

---

import React from 'react';
import TripCard from './TripCard';

const TripComp = (props) => {

return (

    <div>

      {props.trips.map(trip => <TripCard key={trip.id} trip={trip} />)}

    </div>

)

};

## export default TripComp;

need this for home page

// // <MainStyle>
// {/_ <AllTrips>
// <h2>FIND YOUR NEXT ADVENTURE</h2>
// <br></br>
// <div>
// <FeaturedTrips />
// </div>
// <br></br>
// <br></br>
// <div>
// <PopularLocations />
// </div>
// _/}
// {/_ </AllTrips> _/}

// // </MainStyle>

---
