import { getToken, socialAuthPath } from '../../../store/actions/authActions/socialAuthActions';
// export const getToken = (tokenString) => {
//     const startIndex = tokenString.indexOf('=') + 1;
//     const token = tokenString.slice(startIndex);
//     return token;
//   };

describe('social actions', () => {
  test('should return a string', () => {
    const token = getToken('=khsbbs');
    expect(token).toEqual('khsbbs');
  });
  test('should ', () => {
    expect(socialAuthPath('google')).toBe(null);
  });
});
