import React from 'react'
//components
import FeaturedTrips from '../components/FeaturedTrips'; 
import PopularLocations from '../components/PopularLocations';
 //styles
 import styled from 'styled-components'


const Home = () => {

  return (

    <div>
     <MainStyle>
       <AllTrips>
        <h2>FIND YOUR NEXT ADVENTURE</h2>
        <br></br>
        <div>
      <FeaturedTrips />
        </div>
        <br></br>
        <br></br>
        <div>
      <PopularLocations />
        </div>
        
        </AllTrips> 

        </MainStyle>
    </div>

  ); 

};

const MainStyle = styled.main`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;


`; 

const AllTrips= styled.div`
  padding: 1.5rem 0rem;
  h2 {
   color: #625261;
   line-height: 1.5; 
   text-align: center; 
   margin-bottom: 1px;
   margin-top: 1px;
  }
`; 

export default Home; 