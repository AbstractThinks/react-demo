import { combineReducers } from 'redux';
import {postsBySubreddit, selectedSubreddit} from './reducerBoilerplate';

const rootReducer = combineReducers({
  postsBySubreddit,
  selectedSubreddit
})

export default rootReducer
