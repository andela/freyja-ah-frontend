import {
  GET_ALL_MODULES,
  MODULES_ERROR,
  GET_SINGLE_MODULE,
} from '../actions/types';

const initialState = {
  allModules: [],
  singleModule: {},
  errors: {},
};

const modulesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_MODULES:
      return {
        ...state,
        allModules: payload,
      };
    case GET_SINGLE_MODULE:
      return {
        ...state,
        singleModule: payload,
      };
    case MODULES_ERROR:
      return {
        ...state,
        errors: payload,
      };
    default:
      return state;
  }
};

export default modulesReducer;
