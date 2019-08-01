import { combineReducers } from 'redux';
import authReducer from './authReducer';
import modulesReducer from './modulesReducer';
import testReducer from './testReducer';
import communityReducer from './communityReducer';
import profileReducer from './profileReducer';

const appReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  modules: modulesReducer,
  test: testReducer,
  community: communityReducer,
});

export default (state, action) => appReducer(state, action);
