import React, { Component } from 'react'; 
import Trips from './Trips';
// import Navbar from './components/Navbar'
import './App.css';


class App extends React.Component { 

  // componentDidMount() {
  //   fetch('http://localhost:3001/api/vi/users',{
  //     method: 'GET'
  //   })
  //   .then(res => res.json())
  //   .then(data => console.log(data))


  // }
      







  render() {
    return (

      

      <div className="App"> 
        <div className="App-header">
          <div className="topnav">
            <p>THE VAULT </p>
          </div>
          
          <div className="topnav-right">
            <p>PROFILE</p>
            <p>LOG OUT</p>
          </div>
          
        </div>


      
        <Trips />
      </div>
      
      
    );
  }
}

export default App;  