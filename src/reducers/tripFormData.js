const initialState = {
  title: '',
  city: '',
  country: '',
  date_of_trip: 0, 
  // user_id: ''

}

export default (state = initialState, action) => {

switch(action.type) {
  case 'UPDATED_DATA':
    return action.tripFormData;

    case 'RESET_TRIP_FORM':
      return initialState;

    default: 
    return state; 
}
}