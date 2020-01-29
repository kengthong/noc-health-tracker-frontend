import { combineReducers } from 'redux';
import authReducer from './auth-reducer';

const rootReducer = history =>
  combineReducers({
    authReducer,
  });

export default rootReducer;
