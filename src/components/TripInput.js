import React from 'react'; 
import {connect} from 'react-redux'
//import action 
import { createTrip } from '../actions/trips'; 
//import css 
import TripFrm from './TripFrm.css'; 

class TripInput extends React.Component {

  state={
    img_url: '',
    title: '',
    city: '',
    country: '',
    date_of_trip: 0,
    }
    
  handleChange = (event) => {
    // debugger; 
    this.setState({
      [event.target.name]: event.target.value
      //
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.createTrip(this.state)
    this.setState({
      img_url: '',
      title: '',
      city: '',
      country: '',
      date_of_trip: 0,
    })
  }


  
  render() {

    return (
     
      <div className="SubmissionContainer" id="NewForm" onSubmit={this.handleSubmit}>
      <div>
          <div className="title">
              <b> Add a Trip </b>
 
          </div>
 
 
          <form>
 
              <div>
                <label htmlFor="img_url">Upload Image: </label>
                <input 
                type="text"
                onChange={this.handleChange} 
                name="img_url" 
                value={this.state.img_url}                 
                />
              </div>
 
              <div>
                  <label htmlFor="title">Title: </label>
                  <input 
                  type="text" 
                  onChange={this.handleChange}
                  name="title"
                  value={this.state.title}   
                  /> 
              </div>
              <div>
                  <label htmlFor="city">City: </label>
                  <input 
                  type="text"
                  onChange={this.handleChange} 
                  name="city"
                  value={this.state.city} 
                   />
              </div>
 
              <div>
                  <label htmlFor="country">Country: </label>
                  <input
                   type="text" 
                   onChange={this.handleChange}
                   name="country"
                   value={this.state.country} 
                    />
              </div>

              <div>
                  <label htmlFor="date_of_trip">Date: </label>
                  <input 
                  type="date" 
                  onChange={this.handleChange}
                  name="date_of_trip"
                  value={this.state.date_of_trip} 
                   />
              </div>

            <button className="AddTrip" type="submit">Add Trip /</button>
        </form>
      </div>
  </div>
 
  )
  }
}

export default connect(null, { createTrip })(TripInput); 

// form without a value is an uncontrolled from 
// does not need mapstate to prop because it does not need content that is in the store, 
// we are not passing mapstate to prop as an argument 
//the second argument is the action creator 