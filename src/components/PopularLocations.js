import React from 'react'; 

//Import css
import styled from 'styled-components'

const PopularLocations = () => {

  return (
     <div> 
        <h2>Popular Locations</h2>

      <LocationsContainer >

          <LocationsCard >
          <img src="https://unsplash.it/500/504" alt="PopularImage" />
                  <LocationDetails >
                      <a className="location-name" href="/#">Sydney, Australia</a>
                          <Tripcount> 1005 trips</Tripcount>
                  </LocationDetails>
          </LocationsCard>

          <LocationsCard >
          <img src="https://unsplash.it/500/505" alt="PopularImage" />
                  <LocationDetails >
                      <a className="location-name" href="/#">New York, USA</a>
                          <Tripcount> 300 trips</Tripcount>
                  </LocationDetails>
          </LocationsCard>

          <LocationsCard >
              <img src="https://unsplash.it/500/506" alt="PopularImage"  />
                  <LocationDetails >
                      <a className="location-name" href="/#">Barcelona, Spain</a>
                          <Tripcount> 2200 trips</Tripcount>
                  </LocationDetails>
          </LocationsCard>

          <LocationsCard >
             <img src="https://unsplash.it/500/507" alt="PopularImage"  />
                  <LocationDetails >
                      <a className="location-name" href="/#">Nuuksio, Finland</a>
                          <Tripcount> 1700 trips</Tripcount>
                  </LocationDetails>
          </LocationsCard>

          <LocationsCard >
              <img src="https://unsplash.it/500/508" alt="PopularImage"  />
                  <LocationDetails >
                      <a className="location-name" href="/#">South Island, New Zealand</a>
                      <Tripcount> 1000 trips </Tripcount>
                  </LocationDetails>
          </LocationsCard>

          <LocationsCard >
          <img src="https://unsplash.it/500/509" alt="PopularImage"  />
                  <LocationDetails >
                      <a className="location-name" href="/#">Rome, Italy </a>
                          <Tripcount> 1005 trips</Tripcount> 
                  </LocationDetails>
          </LocationsCard>

      </LocationsContainer>


    </div>
    
  ); 
};  

const LocationsContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
width: 100%;


`;
 
 const LocationsCard = styled.div `
float: left;
margin: 6px;
background: whitesmoke;
height: 370px;
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

const LocationDetails = styled.div `
padding-left: 10px;
padding-right: 10px;
`;

const Tripcount = styled.div `
  left: 0px;
`;

  

export default PopularLocations ; 

