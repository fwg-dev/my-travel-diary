import React, { Component } from 'react'; 
import './App.css'
import Trips from './Trips.js';

const API_URL = process.env.REACT_APP_API_URL;

class App extends Component {

   constructor(props) {
     super(props)

     this.state = {
       trips: []
     }
   }
  //  debugger;
   componentDidMount() {
     fetch(`${API_URL}/trips`)
       .then(response => response.json())
       .then(trips => this.setState({ trips }))
   }
  
   
  render() {
    return (
      <div className="App"> 
        <Trips trips={ this.state.trips } />
      </div>
    );
  }
}

export default App;  