import React, { Component } from 'react'; 
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import TripCard from '../components/TripCard';
import TripForm from './TripForm'; 
import { getTrips } from '../actions/trips';
import './Trips.css';

class  Trips extends Component {

   componentDidMount() {
      this.props.getTrips()
   }

     render(){
      return(
      <div className="TripContainer">
            {this.props.trips.map(trip => <TripCard key={trip.id} trip={trip} />)}
            <TripForm />
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