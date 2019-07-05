import { combineReducers } from 'redux';
import { createBrowserHistory } from 'history';

import authReducer from './authReducer';
import errorReducer from './errorsReducer';

export const history = createBrowserHistory();

const appReducer = combineReducers({
  auth: authReducer,
  errors: errorReducer,
});

export default (state, action) => appReducer(state, action);
