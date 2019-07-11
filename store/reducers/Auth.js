export const initialState = {
  passwordResetError: '',
  passwordResetSuccess: '',
  loading: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'PASSWORD_RESET_ERROR':
      return {
        ...state,
        passwordResetError: 'invalid email',
        passwordResetSuccess: '',
        loading: false,
      };
    case 'PASSWORD_RESET_SUCCESS':
      return {
        ...state,
        passwordResetError: '',
        passwordResetSuccess: 'Please check your email',
        loading: false,
      };
    default:
      return state;
  }
};

export default authReducer;
