/* eslint-disable arrow-parens */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { GET_ERRORS, SET_CURRENT_USER } from './types';

// Set loged in user
export const setCurrentUser = decoded => ({
  type: SET_CURRENT_USER,
  payload: decoded,
});
export const setError = error => ({
  type: GET_ERRORS,
  payload: error,
});

// Register
export const registerUser = (newUser, history) => dispatch => {
  return axios
    .post('https://freyja-ah-backend.herokuapp.com/api/users', newUser)
    .then(res => {
      // Save to local storage
      const { token } = res.data;
      // Decode token to get user data
      const decoded = jwtDecode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
      history.push('/modules');
    })
    .catch(
      error => {
        dispatch(setError(error));
        console.log(error)
      },

      // eslint-disable-next-line function-paren-newline
    );
};
