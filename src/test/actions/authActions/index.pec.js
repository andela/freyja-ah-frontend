import axios from 'axios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  ResetPassword,
} from '../../../../store/actions/authActions/resetPassword';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const store = mockStore({
  passwordResetError: '',
  passwordResetSuccess: '',
  loading: 'false',
});

jest.mock('axios');

describe('', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return specifc action if successful', () => {
    const expectedActions = ['LOADING', 'PASSWORD_RESET_SUCCESS'];
    const response = {
      data: {
        message: 'Reset password email as been sent to you, Kindly check your email for next steps to be taken to reset your password',
        status: 'success',
      },
    };
    axios.get.mockResolvedValue(response);

    const dispatchedActions = store.getActions();

    const actionTypes = dispatchedActions.map(action => action.type);

    expect(actionTypes).toEqual(expectedActions);
  });
});
