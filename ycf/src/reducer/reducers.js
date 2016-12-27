import { combineReducers } from 'redux';
import {
    posts,
    comments,
    comment
} from './reducerBoilerplate.js';

const rootReducer = combineReducers({
  posts,
  comments,
  comment
})

export default rootReducer
