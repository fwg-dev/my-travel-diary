import {
  createStore, 
  applyMiddleware,
  combineReducers, 
  compose
} from 'redux';
import thunk from 'redux-thunk';
//Import Reducers 
import trips from './reducers/trips';
import tripFormData from './reducers/tripFormData'; 


const composeEnhancer = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const reducers = combineReducers ({
  trips, 
  tripFormData, 
  
});

const store = createStore(
  reducers,
  composeEnhancer(applyMiddleware(thunk))
);

export default store

// thunk - 