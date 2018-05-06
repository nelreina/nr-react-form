import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import club from './reducers/club';

export default combineReducers({
  form: formReducer,
  club
});
