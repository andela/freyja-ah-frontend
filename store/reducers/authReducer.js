import {
  LOGIN_ERROR,
  INIT_AUTH_REQUEST,
  END_AUTH_REQUEST,
  SET_CURRENT_USER,
  GET_ERRORS,
} from '../actions/types';
import isEmpty from '../../src/validations/isEmpty';

export const initialState = {
  passwordResetError: '',
  passwordResetSuccess: '',
  isLoading: false,
  isAuthenticated: false,
  user: {},
  errors: {},
};

const authReducer = (state = initialState, action) => {
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
    case LOGIN_ERROR:
      return {
        ...state,
        errors: action.payload,
      };
    case GET_ERRORS:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.error),
        errors: action.errors,
      };
    case 'LOADING':
      return {
        ...state,
        isLoading: true,
      };
    case 'PASSWORD_RESET_ERROR':
      return {
        ...state,
        passwordResetError: 'invalid email',
        passwordResetSuccess: '',
        isLoading: false,
      };
    case 'PASSWORD_RESET_SUCCESS':
      return {
        ...state,
        passwordResetError: '',
        passwordResetSuccess: 'Please check your email',
        isLoading: false,
      };
    default:
      return state;
  }
};

export default authReducer;
