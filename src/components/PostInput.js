import React from 'react'; 

//Import css
import styled from 'styled-components'



class PostInput extends React.Component {


  render(){
    return (
  <PostInputContainerStyle>

      <DescriptionStyle>
          <div>
            <label htmlFor="heading">Heading: </label>
            <input 
            type="text"     
            name="heading" 
            /> 
          </div>

          <div>
            <label htmlFor="description">description: </label>
            <textarea placeholder="Please write your post here"
            type="text"     
            name="description" 
            /> 
          </div>
          <div>
            <label htmlFor="img">Upload Image: </label>
            <input 
            type="text"
            name="img"              
            />
           </div>
          <button className="AddPost" type="submit"> Add a Post </button>
       
      </DescriptionStyle>
   </PostInputContainerStyle>
    )

  }

}

const DescriptionStyle = styled.div`
margin: 5rem 0rem;
label{
  text-transform: uppercase;
  margin-top: 1.0rem;
  margin-bottom: 1.0rem;
  font-size: 1.00rem;
  line-height: 1.05rem;
  font-family: "varela round", sans-serif;
}
textarea{
  margin: 0px; 
  width:527px;
   height: 138px;
}
input{
  margin: 0px; 
  width: 450px;
   height: 35px;
}
button {
  background-color: #dbd7d2;
  border: none;
  color: white;
  padding: 10px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 12px 1px;
  cursor: pointer;
}

`; 

const PostInputContainerStyle = styled.div`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  z-index: 10;
`;  

export default PostInput; 