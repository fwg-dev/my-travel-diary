import React from 'react'; 
import { connect } from 'react-redux'; 
//import actions
import { addPost } from '../actions/posts'; 

//Import css
import styled from 'styled-components'

class PostInput extends React.Component {

  state = {
    heading: "",
    description: "", 
    img: ""

  }

  handleChange = (event) => {
    // debugger; 
    this.setState({
      [event.target.name]: event.target.value
      //
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addPost(this.state, this.props.trip.id)
    // debugger; 
    this.setState({
      heading: '',
      description: '',
      img: '',
  
    })
  }


  render(){
    return (
  <PostInputContainerStyle  onSubmit={this.handleSubmit}>

      <DescriptionStyle >
          <div>
            <label htmlFor="heading">Heading: </label>
            <input 
            type="text"  
            onChange={this.handleChange}   
            name="heading" 
            value={this.state.heading}
            /> 
          </div>

          <div>
            <label htmlFor="description">description: </label>
            <textarea placeholder="Please write your post here"
            type="text"     
            onChange={this.handleChange}
            name="description" 
            value={this.state.description}
            /> 
          </div>

          <div>
            <label htmlFor="img">Upload Image: </label>
            <input 
            type="text"
            onChange={this.handleChange}
            name="img"
            value={this.state.img}           
            />
           </div>
          <div>
          <button type="submit" className="AddPost" type="submit">Add Post </button>
            
          </div>

      </DescriptionStyle>
   </PostInputContainerStyle>
    )

  }

}

const DescriptionStyle = styled.form`
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
  width: 35%;
  background-color: #a9a7a4;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

`; 

const PostInputContainerStyle = styled.div`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  position: absolute;
  left: 10%;
  color: black;
  z-index: 10;
`;  

export default connect(null, {addPost})(PostInput); 