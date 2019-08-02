/* eslint-disable arrow-parens */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import { registerUser, loginUser } from '../../store/actions/authActions';
import { testBaseUrl } from '../config/testConfig';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mockUser = {
  firstName: 'Ochowo',
  lastName: 'Jones',
  userName: 'gr',
  email: 'pricess@gmail.com',
  password: 'password',
  confirmPassword: 'password',
};


const userData = {
  email: 'davidchizindu@gmail.com',
  password: '11111111',
};


describe('authAction', () => {
  let store;

  beforeEach(() => {
    store = mockStore({});
  });
  afterEach(() => {
    // clear all HTTP mocks after each test
    nock.cleanAll();
  });

  it('should decode user token when registerUser is successful', done => {
    nock(`${testBaseUrl}`)
      .post('/api/users')
      .reply(201, {
        message: 'user registration was successful',
        user: {
          id: 24,
          firstName: 'ochowo',
          lastName: 'Jones',
          email: 'princess@gmail.com',
          userName: 'gr',
        },
        token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI0LCJlbWFpbCI6InByaW5jZXNzQGdtYWlsLmNvbSIsInVzZXJOYW1lIjoiZ3IiLCJpYXQiOjE1NjI1Mjg2NTcsImV4cCI6MTU2MzEzMzQ1N30.oWthtPvSh-zz4RwgHZsJtdxpjhHlUKix0oK1I9nqkOA',
      });
    store.dispatch(registerUser(mockUser)).then(() => {
      expect(store.getActions()).toMatchSnapshot();
      done();
    });
  });

  it('should decode user token when registerUser is successful', done => {
    const errorMessage = 'This username is already in use';
    nock(`${testBaseUrl}`)
      .post('/api/users')
      .reply(400, { error: errorMessage });
    store.dispatch(registerUser({})).then(() => {
      expect(store.getActions()).toMatchSnapshot();
      done();
    });
  });

  it('Logs in a user', (done) => {
    nock(`${testBaseUrl}`)
      .post('/api/users', userData)
      .reply();

    store.dispatch(loginUser(userData))
      .then(() => {
        const expectedActions = ['INIT_AUTH_REQUEST', 'END_AUTH_REQUEST', 'SET_CURRENT_USER'];

        const dispatchedAction = store.getActions();
        const actionTypes = dispatchedAction.map(action => action.type);

        expect(actionTypes).toEqual(expectedActions);
      });
    done();
  });

  it('should return error when invalid users trys to Log in', (done) => {
    nock(`${testBaseUrl}`)
      .post('/api/users', {})
      .replyWithError();

    store.dispatch(loginUser({}))
      .catch(() => {
        const expectedActions = ['END_AUTH_REQUEST', 'LOGIN_ERROR'];
        const dispatchedAction = store.getActions();
        const actionTypes = dispatchedAction.map(action => action.type);

        expect(actionTypes).toEqual(expectedActions);
      });
    done();
  });
});
