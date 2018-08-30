import { combineReducers } from 'redux';
import { auth, account } from './reducers';

export default combineReducers({ auth, account });