// list of all posts associated with one trip! 
import React from 'react'; 
import {connect} from 'react-redux'; 

import { deletePost} from '../actions/posts'; 

const Posts = (props) => {

  const handleDelete =(post)=>{
    props.deletePost(post.id, post.trip_id)   

  }


  return (
    <div>
    {props.posts && props.posts.map(post =>             
     <div key={post.id}>
         <h5>{post.heading}</h5> 
         <p>{post.description}</p>
        <div>
         <img className= "PostImage" src={post.img} alt={post.heading} />
        </div>
      <button 
      onClick={ () => handleDelete(post)}

      
      
      >Delete</button>
   </div>
        
    
    )}
    </div>
    
  )

}

export default  connect(null, {deletePost})(Posts); 
