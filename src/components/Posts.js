// list of all posts associated with one trip! 

import React from 'react'; 


const Posts = (props) => {
  // console.log(props.posts)
  // debugger; 
  return (
    <div>
    {props.posts && props.posts.map(post =>             
     <div key={post.id}>
        <h5>{post.heading}</h5> 
        <p>{post.description}</p>
        <div>
        <img className= "PostImage" src={post.img} alt={post.heading} />
      </div>
   </div>
        
    
    )}
    </div>
    
  )

}

export default Posts; 
