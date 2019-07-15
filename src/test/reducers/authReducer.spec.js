import authReducer from '../../../store/reducers/authReducer';
import { setCurrentUser } from '../../../store/actions/authActions';

let action;
let newState;

const initialState = {
  passwordResetError: '',
  passwordResetSuccess: '',
  isLoading: false,
  isAuthenticated: false,
  user: {},
  error: {},
};

const newUser = {
  firstName: 'ochowo',
  lastName: 'haruna',
  userName: 'ooche',
  email: 'ochowoharuhhhnaa@gmail.com',
  password: 'passwordd',
  confirmPassword: 'passwordd',
};

describe('Auth Reducer', () => {
  it(' should return Initial state for undefined prop types', () => {
    expect(authReducer(undefined, { type: 'undefinedAction' })).toEqual({
      passwordResetError: '',
      passwordResetSuccess: '',
      isLoading: false,
      isAuthenticated: false,
      user: {},
      error: {},
    });
  });
  it('should handle action type SET_CURRENT_USER', () => {
    action = setCurrentUser(newUser);
    newState = authReducer(initialState, action);
    expect(newState).not.toEqual(initialState, action);
    expect(newState.user).not.toEqual(undefined);
    expect(newState.isAuthenticated).toEqual(true);
  });
});
