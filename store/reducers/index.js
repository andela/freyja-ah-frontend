import { combineReducers } from 'redux';
import { createBrowserHistory } from 'history';



export const history = createBrowserHistory();

const appReducer = combineReducers({});


export default (state, action) => {
  return appReducer(state, action);
};
