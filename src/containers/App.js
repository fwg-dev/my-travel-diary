import React from 'react'; 
// import Navbar from './components/Navbar'
import Nav from '../components/Navbar';
import Home from '../pages/Home';
import Profile from '../pages/Profile'; 
import PersonalTrips from '../pages/PersonalTrips'
import TripDetail from '../components/TripDetail'

//Router 
import { Route, Switch } from 'react-router-dom'; 



class App extends React.Component { 
     
  render() {
    return (

      <div> 
          <Nav />
          <Switch >
          <Route path="/" exact>
             <Home /> 
          </Route>
          <Route path="/profile"  exact>
            <Profile />
          </Route>
          <Route path="/trips"  exact>
            <PersonalTrips/>
          </Route> 
          <Route path="/trips/:id" exact>

             <TripDetail />
          </Route>
         

          </Switch>
         
      </div>
      
      
    );
  }
}

export default App;  