/* eslint-disable arrow-parens */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import { registerUser } from '../../../store/actions/authActions';

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

const history = { push: jest.fn() };
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
    nock('https://freyja-ah-backend.herokuapp.com')
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
    store.dispatch(registerUser(mockUser, history)).then(() => {
      expect(store.getActions()).toMatchSnapshot();
      done();
    });
  });
  it('should decode user token when registerUser is successful', done => {
    const errorMessage = 'This username is already in use';
    nock('https://freyja-ah-backend.herokuapp.com')
      .post('/api/users')
      .reply(400, { error: errorMessage });
    store.dispatch(registerUser({})).then(() => {
      expect(store.getActions()).toMatchSnapshot();
      done();
    });
  });
});