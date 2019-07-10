import {
<<<<<<< HEAD
<<<<<<< HEAD
=======
  SIGNUP_ERROR,
>>>>>>> Created Login component with its action creators
=======
>>>>>>> Add tests for login component [delivers 166236212]
  LOGIN_ERROR,
  INIT_AUTH_REQUEST,
  END_AUTH_REQUEST,
  SET_CURRENT_USER,
} from '../actions/types';
import isEmpty from '../../utils/isEmpty';

const initialState = {
  isAuthenticated: false,
  isLoading: false,
  user: {},
  errors: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INIT_AUTH_REQUEST:
      return {
        ...state,
        isLoading: true,
        errors: {},
      };
    case END_AUTH_REQUEST:
      return {
        ...state,
        isLoading: false,
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
      };
<<<<<<< HEAD
<<<<<<< HEAD
=======
    case SIGNUP_ERROR:
      return {
        ...state,
        errors: action.payload,
      };
>>>>>>> Created Login component with its action creators
=======
>>>>>>> Add tests for login component [delivers 166236212]
    case LOGIN_ERROR:
      return {
        ...state,
        errors: action.payload,
      };
    default:
      return state;
  }
};
