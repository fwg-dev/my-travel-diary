const initialState = {
    img_url: '',
    title: '',
    city: '',
    country: '',
    date_of_trip: '',
  
}

export default (state=initialState, action) => {

  switch(action.type) {
    case 'UPDATED_DATA':
      return action.tripFormData;

      case 'RESET_TRIP_FORM':
        return initialState;

      default: 
      return state;
  }
}