import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { GET_ERRORS, SET_CURRENT_USER, LOGIN_ERROR, INIT_AUTH_REQUEST, END_AUTH_REQUEST, VERIFY_USER } from './types';
import setAuthToken from '../../utils/setAuthToken';
import { baseUrl } from '../../utils/config';


/**
 * @method setCurrentUser
 * @description sets the current user of the app
 * @param {object} decoded user details
  * @returns {object}
 */
export const setCurrentUser = decoded => ({
  type: SET_CURRENT_USER,
  payload: decoded,
});

/**
 * @method setError
 * @description sets app error
 * @param {object} error
  * @returns {object}
 */
export const setError = error => ({
  type: GET_ERRORS,
  errors: error,
});

export const verifyUser = state => ({
  type: VERIFY_USER,
  isVerified: state,
});

/**
 * @method registerUser
 * @description registers a new user
 * @param {object} newUser
  * @returns {object} user object
 */
export const registerUser = newUser => async (dispatch) => {
  try {
    const user = await axios.post(`${baseUrl}/users`, newUser);

    if (user) {
      const { token } = user.data;
      localStorage.setItem('token', token);
      const decoded = jwtDecode(token);
      dispatch(setCurrentUser(decoded));
    }
  } catch (err) {
    const { error } = err.response.data;
    dispatch(setError(error));
  }
};

/**
 * @method loginUser
 * @description registers a new user
 * @param {object} payload
  * @returns {object} user object
 */
export const loginUser = payload => async (dispatch) => {
  dispatch({ type: INIT_AUTH_REQUEST });

  try {
    const request = await axios.post(`${baseUrl}/users/login`, payload);
    dispatch({
      type: END_AUTH_REQUEST,
    });

    const { token } = request.data;
    localStorage.setItem('token', token);

    setAuthToken(token);
    const decoded = jwtDecode(token);
    dispatch(setCurrentUser(decoded));
  } catch (error) {
    dispatch({
      type: END_AUTH_REQUEST,
    });

    const { data } = error.response;
    const errorObj = Array.isArray(data.error) ? { error: data.error[0].msg } : data;
    dispatch({
      type: LOGIN_ERROR,
      payload: errorObj,
    });
  }
};


/**
 * @method verifyAuthUser
 * @description registers a new user
 * @param {string} token
  * @returns {string} confirmation message
 */
export const verifyAuthUser = token => async (dispatch) => {
  try {
    await axios.get(`${baseUrl}/user/verify/${token}`);
    await dispatch(verifyUser("you've been verified, Redirecting to your profile page..."));
  } catch (error) {
    dispatch(verifyUser("Couldn't verify you, Please chcek the link sent to your email again."));
  }
};
