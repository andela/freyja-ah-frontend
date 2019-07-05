import errorReducer from '../../../store/reducers/errorsReducer';

import { setCurrentUser, GET_ERRORS } from '../../../store/actions/authActions';

let action;
const initialState = {};
// const newUser = {
//   firstName: '',
//   lastName: '',
//   userName: '',
//   email: '',
//   password: '',
//   confirmPassword: '',
// };
describe('Error Reducer', () => {
  it('should return the initial state', () => {
    expect(errorReducer(undefined, { type: 'undefinedAction' })).toEqual({});
  });
  it('should handle action type SET_CURRENT_USER', () => {
    const state = errorReducer(initialState, {
      type: 'GET_ERRORS',
    });
    console.log(state, 's');
    expect(state).not.toEqual(initialState, action);
  });
});
