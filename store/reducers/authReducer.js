import { SET_CURRENT_USER, GET_ERRORS } from '../actions/types';
import isEmpty from '../../src/validations/isEmpty';

export const initialState = {
  passwordResetError: '',
  passwordResetSuccess: '',
  isLoading: false,
  isAuthenticated: false,
  user: {},
  error: {},
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
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
