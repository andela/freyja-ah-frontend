import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const enhancers = [];
const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
  enhancers.push((window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  || compose);
}

const composedEnhancers = compose(applyMiddleware(...middlewares), ...enhancers);
const store = createStore(rootReducer, {}, composedEnhancers);

export default store;
