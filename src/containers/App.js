import React from 'react'; 
// import Navbar from './components/Navbar'
import Nav from '../components/Navbar';
import Home from '../pages/Home';
import Profile from '../pages/Profile'; 
import PersonalTrips from '../pages/PersonalTrips'
import TripDetail from '../components/TripDetail'
import Trips from './Trips'


//Router 
import { Route, Switch } from 'react-router-dom'; 



class App extends React.Component { 
     
  render() {
    const { trips } = this.props
    return (

      <div> 
          <Nav />
          <Switch >
          <Route exact path="/" >
             <Home /> 
          </Route>
          <Route exact={true}path="/trips" >
            {/* <Trips /> */}
          </Route>
          <Route exact path="/logout"  >
            {/* <PersonalTrips/> */}
          </Route> 
          
          </Switch>

          <Trips/>
         
      </div>
      
      
    );
  }
}

export default App;  