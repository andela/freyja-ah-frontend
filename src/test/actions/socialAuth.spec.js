import { getToken } from '../../store/actions/socialAuthActions';

describe('social actions', () => {
  test('should return a string', () => {
    const token = getToken('=khsbbs');
    expect(token).toEqual('khsbbs');
  });
});
