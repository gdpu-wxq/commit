import { combineReducers } from 'redux';
import a from './a';
import b from './b';

const rootReducer = combineReducers({
  a,b
});

export default rootReducer;