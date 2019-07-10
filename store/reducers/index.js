import { combineReducers } from 'redux';
import { createBrowserHistory } from 'history';
import profile from './profile';
import authReducer from './authReducer';
export const history = createBrowserHistory();

const appReducer = combineReducers({
  auth: authReducer,
  profile,
});

export default (state, action) => appReducer(state, action);
