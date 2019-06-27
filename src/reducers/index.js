import { combineReducers } from 'redux';
import { login } from './login';
import { register } from './register';
import { newTicket } from './newticket';
import { getticket } from './getticket';
import { updateticket } from './updateticket';
import {deleteticket} from './delete';
import tickets from './tickets'

export default combineReducers({
  login,
  register,
  newTicket,
  getticket,
  updateticket,
  deleteticket,
  
  tickets
});