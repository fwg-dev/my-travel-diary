import React from 'react'; 
import PostInput from '../components/PostInput';
import Posts from '../components/Posts'; 


class PostsContainer extends React.Component {

  render(){
    return(
      <div>
           <div>
          <Posts posts={this.props.trip && this.props.trip.posts} />
        </div>
        <div>
          <PostInput trip={this.props.trip} />
        </div>
      </div>

    )

}

}

export default PostsContainer; 
