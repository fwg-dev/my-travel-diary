import React from 'react'; 

//Import css
import styled from 'styled-components'

const FeaturedTrips = () => {

  return (
     <div> 
       <div> <h2>Featured Trips</h2></div>
    
     <FeaturedTripsContainer>
      <TripsCard>
      <img src="https://unsplash.it/500/500" alt="trippic" />
            <TripDetails>
              <a className="trip-title" href="/#">Trip of a lifetime</a>
              <div>
                  <h3 className="author">Faith Gicheha</h3>
                  <h5 className="trip-place">Nairobi, Kenya</h5>
                  <h5 className="trip-date">Aug 2020 </h5>
              </div>
             
            </TripDetails>
        </TripsCard>  

        <TripsCard>
            <img src="https://unsplash.it/500/501" alt="trippic" />
            <TripDetails>
              <a className="trip-title" href="/#">Trip of a lifetime</a>
              <div>
                  <h3 className="author">Faith Gicheha</h3>
                  <h5 className="trip-place">Nairobi, Kenya</h5>
                  <h5 className="trip-date">Aug 2020 </h5>
              </div>
              
            </TripDetails>
        </TripsCard>  



        <TripsCard>
            <img src="https://unsplash.it/500/502" alt="trippic" />
            <TripDetails>
              <a className="trip-title" href="/#" alt="title">Trip of a lifetime </a>
              <div>
                  <h3 className="author">Kevin Gicheha</h3>
                  <h5 className="trip-place">Nairobi, Kenya</h5>
                  <h5 className="trip-date">Aug 2020 </h5>
              </div>
              
            </TripDetails>
        </TripsCard>  

        <TripsCard>
            <img src="https://unsplash.it/500/503" alt="trippic" />
            <TripDetails>
              <a className="trip-title" href="/#">Trip of a lifetime</a>
              <div>
                  <h3 className="author">Kevin Kimani</h3>
                  <h5 className="trip-place">Nairobi, Kenya</h5>
                  <h5 className="trip-date">Aug 2020 </h5>
              </div>
            
            </TripDetails>
        </TripsCard>  

         
    </FeaturedTripsContainer>
    </div>
  ); 
  };



  const FeaturedTripsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
  padding: 1.5rem 1.0;
  

  `;
   
   const TripsCard = styled.div `
   float: left;
  margin: 6px;
  background: whitesmoke;
  height: 440px;
  width: 300px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1 px 2px rgba(0,0,0,0.24);
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  text-align: center;
  position: relative;
  border-radius: 5px;
  h2{
    text-align: center; 

  }
 
  img{
    width: 89%;
    height: 300px;
    padding: 3px;
    display: inline-block;
    white-space: nowrap;

  }
  
 `;

 const TripDetails = styled.div `
  padding-left: 10px;
  padding-right: 10px;
 `;
 

export default FeaturedTrips; 