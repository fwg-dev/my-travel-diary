import React, { Component } from 'react'; 
import { connect } from 'react-redux';

import TripCard from '../components/TripCard';



import { getTrips } from '../actions/trips';
import TripInput from '../components/TripInput'; 
// //Router 
import { Route, Switch } from 'react-router-dom'; 
//import style 
// import styled from 'styled-components'
import './Trips.css';class  Trips extends Component {

   componentDidMount() {
      this.props.getTrips()
   }

     render(){
      return(

     <div>
     
     {/* <TripInput /> */}
      <div className="TripContainer"> 
      <TripInput />
         {this.props.trips.map(trip => <TripCard key={trip.id} trip={trip} />)} 
      </div>
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

//connect our way of connecting redix store to this component 
//map state to props way of accessing values in the store as props
// we pass an action creator (getTrips) gives us the ability to update/dispatch new actions to  the store directly from this component
//44:00 mins
// trips is a prop that why we are calling this.props.trips 
//