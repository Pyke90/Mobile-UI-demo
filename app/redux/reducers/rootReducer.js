import { combineReducers } from 'redux';

import counterReducer from './counterReducer.js';
import noteReducer from './noteReducer.js';

const rootReducer = combineReducers({
  counterReducer: counterReducer,
  noteReducer: noteReducer,
});

export default rootReducer;