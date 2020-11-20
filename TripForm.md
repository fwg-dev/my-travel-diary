import React, { Component } from 'react'; 
import { connect } from 'react-redux';

import { updateTripFormData } from '../actions/tripForm'; 
import { createTrip} from '../actions/trips';

import './TripForm.css';

class TripForm extends Component {

  handleOnChange = event => {
    const { name, value } = event.target; 
    // console.log(name)
    const currentTripFormData = Object.assign({}, this.props.tripFormData, {
      [name]: value

    })
    this.props.updateTripFormData(currentTripFormData)
  }

  handleOnSubmit = event => { 
    event.preventDefault()
    this.props.createTrip(this.props.tripFormData)

  }

  render() {
    const { img_url, title, city, country, date_of_trip } = this.props.tripFormData;

    return (
      <div className="SubmissionContainer" id="NewForm">
        <div>
        <div className="title">
          <b> Add a Trip </b>

        </div>
          

          <form onSubmit={this.handleOnSubmit}>

          <div>
            <label htmlFor="img_url">Upload Image: </label>
              <input
              type="text"
              onChange ={this.handleOnChange}
                name="img_url"
                value={img_url}
                />
          </div>

          <div>
          <label htmlFor="title">Title: </label>
            <input
            type="text"
            onChange ={this.handleOnChange}
              name="title"
              value={title}
              />
          </div>


          <div>
            <label htmlFor="city">City: </label>
              <input
              type="text"
              onChange ={this.handleOnChange}
                name="city"
                value={city}
                /> 
          </div>

        <div>
            <label htmlFor="country">Country: </label>
                <input
                    type="text"
                    onChange ={this.handleOnChange}
                    name="country"
                    value={country}
                  />
        </div>

          <div>
            <label htmlFor="date_of_trip">Date: </label>
              <input
               type="date"
               onChange ={this.handleOnChange}
                name="date_of_trip"
                value={date_of_trip}
                />
          </div>

          

              <button className ="AddTrip" type= "submit">Add Trip</button> 
          </form>
        </div>
      </div>
      
    )
  }

}


const mapStateToProps = state => {
  return {
   tripFormData: state.tripFormData
  }
}

export default connect(mapStateToProps, {
  updateTripFormData,
  createTrip

})(TripForm); 

