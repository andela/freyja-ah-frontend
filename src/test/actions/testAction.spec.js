import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import { testBaseUrl } from '../config/testConfig';
import { getTest } from '../../store/actions/testActions';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('test action', () => {
  let store;
  beforeEach(() => {
    store = mockStore({});
  });

  afterEach(() => {
    nock.cleanAll();
  });
  it('should test questions', async (done) => {
    nock(`${testBaseUrl}`)
      .get('/api/tests/1')
      .reply(200);
    await store.dispatch(getTest()).then(() => {
      expect(store.getActions()).toMatchSnapshot();
      done();
    });
  });
});
