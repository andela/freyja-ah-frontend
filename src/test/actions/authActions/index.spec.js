import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import {
  ResetPassword, loading, passwordResetSuccess, passwordResetError,
} from '../../../../store/actions/authActions/resetPassword';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


describe('async actions', () => {
  let store;
  beforeEach(() => {
    store = mockStore({});
  });
  afterEach(() => {
    nock.cleanAll();
  });

  it('creates PASSWORD_RESET_SUCCESS when fetching to-dos has been done', () => {
    nock('https://freyja-ah-backend.herokuapp.com')
      .post('/api/users/reset')
      .reply(200, { message: 'Please check your email' });

    return store.dispatch(ResetPassword('mattimobolaji@gmail.com'))
      .then(() => {
        expect(store.getActions()).toMatchSnapshot();
      });
  });

  it('creates PASSWORD_RESET_ERROR when fetching to-dos has been done', () => {
    nock('https://freyja-ah-backend.herokuapp.com')
      .post('/api/users/reset')
      .reply(401, { error: 'invalid email' });

    return store.dispatch(ResetPassword('mattimobolaji@gmail.commm'))
      .then(() => {
        expect(store.getActions()).toMatchSnapshot();
      });
  });


  it('creates PASSWORD_RESET_SUCCESS when reset password action was successful', () => {
    store.dispatch(passwordResetSuccess('Please check your email'));
    expect(store.getActions()).toMatchSnapshot();
  });

  it('creates PASSWORD_RESET_ERROR when reset password action was not successful', () => {
    store.dispatch(passwordResetError('invalid Email'));
    expect(store.getActions()).toMatchSnapshot();
  });

  it('updates loading to true in state', () => {
    store.dispatch(loading());
    expect(store.getActions()).toMatchSnapshot();
  });
});
