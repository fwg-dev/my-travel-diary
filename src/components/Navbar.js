import React from 'react';
//style 
import styled from 'styled-components'

//Routes 

import { Link } from 'react-router-dom'; 

class  Navbar extends  React.Component  {
  render (){
      return(
        <StyledNav> 
          <Link to="/"> <a id="logo" href="#home">CAPTURE</a>
          </Link>
      <ul> 
     
        <li>
          <Link to="/profile" exact>
            <a href="#Profile">PROFILE</a>
          </Link>
        </li>

      
        <li>
          <Link to="logout" exact>
            <a href="#logout">LOG OUT</a>
          </Link>
        </li>

      </ul>
        </StyledNav>
      );

    }
  
};

const StyledNav = styled.nav`
   /* min-height: 10vh;  */
   display: flex; 
   margin: auto;
   justify-content: space-between;
   align-items: center;  
   padding: 1rem 9rem; 
   background: #282828; 
   a{
     color: white; 
     text-decoration: none; 
   }
   ul{
     display: flex; 
     list-style: none; 
   }
   #logo{
    font-weight: 700;
   padding: 0px;
   align-items: left
   }
   li{
     padding-left: 10rem; 
     position: relative;
   }

`; 

// const Logo = styled.li `
//   font-weight: 700;
//   padding: 0 25px;
//  align-items: left;

// `; 


export default Navbar; 