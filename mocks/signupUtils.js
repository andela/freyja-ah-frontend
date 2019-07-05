/* eslint-disable import/prefer-default-export */
export const props = {
  auth: {
    isAuthenticated: true,
    loading: null,
    user: {
      userId: 21,
      email: 'harufffna@gmail.com',
      userName: 'ooche',
      iat: 1562518707,
      exp: 1563123507,
    },
  },
  errors: {
    isAuthenticated: false,
    loading: null,
    email: '',
    password: '',
    message: '',
  },
};
