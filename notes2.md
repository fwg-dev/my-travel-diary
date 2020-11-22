render(){
return(

<div className="TripContainer">
{this.props.trips.map(trip => <TripCard key={trip.id} trip={trip} />)}
{/_ <TripForm /> _/}
{/_ <Switch>
<Route path='/trips/new' component={TripInput} />
<Route path='/trips/:id' render={(routerProps) => <Trip {...routerProps} trips={this.props.trips} /> } />
<Route path='/trips' render={(routerProps)=> <TripsComp {...routerProps} trips={this.props.trips}/> } />
</Switch> _/}

      </div>

);

}

---

     {...routerProps} trips={props.trips}/>}>

          <Route exact path='/trips/:id' render={props => {
              // I need to get ???
              const trip = trips.find(trip => trip.id === props.match.params.id)
              console.log(trip)
              return <TripCard trip={trip} {...props}/>
            }
          }/>
             {/* <TripDetail /> */}
          </Route>

---

{/\* <Route path='/trips' render={props =>

             <Trips />
             }/>

          {/* <Route path="/trips/:id"  render={(routerProps) => <TripDetail trip={this.props.trips} {...routerProps} /> } />
           */} */}
           ------------------------------------------------------

{/_ <Route exact path="/trips"  component={Trips} /> _/}

           {/* <Route  path='/trips/:id' render={(routerProps) => <TripDetail {...routerProps} trips={trips}/>}/>
           console.log()
           <Route path='/trips' render={(routerProps) => <Trips {...routerProps} trips={this.props.trips}/>}/>  */}

---

/ Action creators \*\*
// const setTrips = trips => {
// return {
// type: 'GET_TRIPS_SUCCESS',
// trips
// }
// }

// const addTrip = trip => {
// return {
// type: 'CREATE_TRIP_SUCCESS',
// trip
// }
// }
