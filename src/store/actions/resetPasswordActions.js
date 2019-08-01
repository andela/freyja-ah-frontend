import axios from 'axios';
import { baseUrl } from '../../utils/config';
import { PASSWORD_RESET_SUCCESS, PASSWORD_RESET_ERROR, LOADING } from './types';

/**
 * @method loading
 * @description initiates loading
  * @returns {object}
 */
export const loading = () => ({
  type: LOADING,
});

/**
 * @method passwordResetSuccess
 * @description handles password reset success
 * @param {string} data success message
  * @returns {object}
 */
export const passwordResetSuccess = data => ({
  type: PASSWORD_RESET_SUCCESS,
  payload: data,
});

/**
 * @method passwordResetError
 * @description handles password reset error
 * @param {string} data error message
  * @returns {object}
 */
export const passwordResetError = data => ({
  type: PASSWORD_RESET_ERROR,
  payload: data,
});

/**
 * @method ResetPassword
 * @description reset user's password
 * @param {string} email
  * @returns {object}
 */
export const ResetPassword = email => async (dispatch) => {
  try {
    dispatch(loading());

    const resetPassword = await axios.post(`${baseUrl}/users/reset`, { email });

    dispatch(passwordResetSuccess(resetPassword.data.message));
  } catch (error) {
    dispatch(passwordResetError(error.response.data.message));
  }
};
