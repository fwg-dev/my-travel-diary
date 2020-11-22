import React, { Component } from 'react'; 
import { connect } from 'react-redux';

import TripDetail from '../components/TripDetail'; 
import TripComp from '../components/TripComp'

import { getTrips } from '../actions/trips';
import TripInput from '../components/TripInput'; 
// //Router 
import { Route, Switch } from 'react-router-dom'; 
//import style 
// import styled from 'styled-components'
import './Trips.css';import TripsComp from '../components/TripComp';
class  Trips extends Component {

   componentDidMount() {
      this.props.getTrips()
   }

     render(){
      return(

     <div>
          <Switch>
           
           <Route  path='/trips/:id' render={(routerProps) => <TripDetail {...routerProps} trips={this.props.trips}/>}/>
           console.log()
           <Route path='/trips' render={(routerProps) => <TripComp {...routerProps} trips={this.props.trips}/>}/> 

       </Switch>


     </div>
     
     

      );
    

   }

}

const mapStateToProps = state => {
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