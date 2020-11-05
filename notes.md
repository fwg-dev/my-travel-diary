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