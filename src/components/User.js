import React from 'react';
//style 
import styled from 'styled-components'

const User = () => {

return(
  <Main>
    <UserProfile>
        <img src="https://images.unsplash.com/photo-1589156280159-27698a70f29e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60" alt="" />

        <div className="profile-details">
        

        </div>
    </UserProfile>
    <h1>Faith W.</h1>

    <ProfileActions >
       <UpdateProfileButton ><a href="#UpdateProfile">Update Profile</a></UpdateProfileButton>
    </ProfileActions>
    <UserBiography>
      <p>
        A girl who loves to travel and to code.Simplicity is the key to happiness.
      </p>
    </UserBiography>

    <hr/>
    {/* <AddTrip><a href="#AddTrip">Add Trip</a></AddTrip> */}
</Main>


); 

}; 
const Main = styled.main`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding: 0px 30px;
 
h1{
  text-align: center;
  text-transform: uppercase;
  margin-top: 1.0rem;
  margin-bottom: 1.0rem;
  font-size: 1.75rem;
  line-height: 2.25rem;
  font-family: "varela round", sans-serif;
}
hr{
  margin: 25px auto;
  width: 100px;  /* Short line. */
  color: light-grey;
}

`; 

const UserProfile = styled.div`
  max-width: 400px;
  margin: auto;
  display: flex;
  justify-content: center;

  img{
  width: 150px;
  height: 150px;
  margin: 0 auto;
  /* border: 10px solid var(--clr-light-grey);
  border-radius: 50%; */
  clip-path: circle(50%);
  object-fit: cover;

  }

`; 

const ProfileActions = styled.div`
  display: flex;
  margin: 15px auto;
  justify-content: center;
  flex-wrap: wrap;
  /* flex-direction: column; */
  max-width: 300px;
  text-decoration: none;
  h1 {
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  font-size: 1.75rem;
  line-height: 2.25rem;
}

`;
const UpdateProfileButton = styled.button`
  outline:none;
  height: 40px;
  text-align: center;
  width: 130px;
  border-radius:40px;
  background: #fff;
  border: 2px solid $green;
  color:$green;
  letter-spacing:1px;
  text-shadow:0; 
  a{
    text-decoration: none;
    color: brown;
  }
`;

const UserBiography = styled.div`
 margin: auto;
  margin-top: 1.35em;
  text-align: center;
  width: 14em;
  color: #4D4D4D; 
  font-size: .87em;
  font-family: "varela round", sans-serif;
`;

const AddTrip = styled.button`
.AddTrip{
  outline:none;
  height: 40px;
  text-align: center;
  width: 130px;
  border-radius:40px;
  background: #fff;
  border: 2px solid $green;
  color:$green;
  letter-spacing:1px;
  text-shadow:0; 
  a{
    text-decoration: none;
    color: brown;
}

`; 

export default User; 