//const { default: tripFormData } = require("../reducers/tripFormData");

export const updateTripFormData = tripFormData => {
  return {
    type: 'UPDATED_DATA',
    tripFormData
  }
}

export const resetTripForm = () => {
  return {
    type: 'RESET_TRIP_FORM'
  }
}