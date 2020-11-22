// const API_URL = process.env.REACT_APP_API_URL;


//Async Actions
export const addPost = (post, tripId) => {
  return (dispatch) => {
    fetch(`http://localhost:3001/api/v1/trips/${tripId}/posts`, {
      method: "POST", 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(post)
    })
     .then(response => response.json())
     .then(trip=> dispatch({type: 'ADD_POST', payload: trip}))
     .catch(error => console.log(error))

    }

  }
  