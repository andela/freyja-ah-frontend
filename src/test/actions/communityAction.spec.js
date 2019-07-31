import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import * as actions from '../../../store/actions/community';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('test community action', () => {
  let store;
  beforeEach(() => {
    store = mockStore({});
  });

  afterEach(() => {
    nock.cleanAll();
  });

  it('successfully get all community messages', () => {
    nock('https://freyja-ah-backend.herokuapp.com').get('/api/community/messages').reply(200, {});

    return store.dispatch(actions.getCommunityMessages()).then(() => {
      expect(store.getActions()).toMatchSnapshot();
    });
  });

  it('return error while trying to get community messages', () => {
    nock('https://freyja-ah-backend.herokuapp.com').get('/api/community/messag').reply(200, {});

    return store.dispatch(actions.getCommunityMessages()).then(() => {
      expect(store.getActions()).toMatchSnapshot();
    });
  });

  it('successfully deletes a community message', () => {
    nock('https://freyja-ah-backend.herokuapp.com').delete('/api/community/messages/2').reply(200, {});

    return store.dispatch(actions.deleteCommunityMessage()).then(() => {
      expect(store.getActions()).toMatchSnapshot();
    });
  });

  it('returns error while trying to delete a community message', () => {
    nock('https://freyja-ah-backend.herokuapp.com').delete('/api/community/messages/i').reply(404, {});

    return store.dispatch(actions.deleteCommunityMessage()).then(() => {
      expect(store.getActions()).toMatchSnapshot();
    });
  });
});
