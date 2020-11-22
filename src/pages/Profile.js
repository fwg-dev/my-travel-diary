import React from 'react'
import User from '../components/User'; 
// import Trips from '../containers/Trips'; 

import Trips from '../containers/Trips'; 



//style
import styled from 'styled-components'


const Profile = () => {

    return(
      <UserProfile>

        <TripsStyle>

          {/* <Trips/> */}
        </TripsStyle>
  
        
      </UserProfile>

  ); 
}; 

const UserProfile = styled.div`
 background-color: #D3D5E1; 

`; 
const TripsStyle = styled.div`
display: flex;
	flex-wrap: wrap;
  margin: -1rem -1rem;


`; 

export default Profile; 