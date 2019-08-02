import axios from 'axios';
import { GET_TEST, GET_ERRORS, INIT_GET_TEST } from './types';
import { baseUrl } from '../../utils/config';

const token = localStorage.getItem('token');

/**
 * @method getTestSuccess
 * @description handles password change success
 * @param {string} data success message
  * @returns {object}
 */
export const getTestSuccess = data => ({
  type: GET_TEST,
  payload: data,
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

/**
 * @method getTest
 * @description get tests for a module
 * @param {Integer} moduleId the module id
  * @returns {object}
 */
export const getTest = moduleId => async (dispatch) => {
  const config = {
    headers: {
      Authorization: token,
    },
  };
  try {
    dispatch({
      type: INIT_GET_TEST,
    });
    const test = await axios.get(
      `${baseUrl}/tests/${moduleId}`,
      config,
    );
    if (test) {
      const { data } = test.data;
      dispatch(getTestSuccess(data));
    }
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error,
    });
  }
};
