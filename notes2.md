   render(){
      return(
      <div className="TripContainer">
            {this.props.trips.map(trip => <TripCard key={trip.id} trip={trip} />)}
            {/* <TripForm /> */}
         {/* <Switch>
         <Route path='/trips/new' component={TripInput} />
         <Route path='/trips/:id' render={(routerProps) => <Trip {...routerProps} trips={this.props.trips} /> } />
         <Route path='/trips' render={(routerProps)=> <TripsComp {...routerProps} trips={this.props.trips}/> } />
         </Switch> */}
               
      </div>
   );

   }

   --------------------------