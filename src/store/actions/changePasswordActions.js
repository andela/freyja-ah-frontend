import axios from 'axios';
import { baseUrl } from '../../utils/config';
import { PASSWORD_CHANGE_ERROR, PASSWORD_CHANGE_SUCCESS, LOADING } from './types';

/**
 * @method loading
 * @description initiates loading
  * @returns {object}
 */
export const loading = () => ({
  type: LOADING,
});

/**
 * @method passwordChangeSuccess
 * @description handles password change success
 * @param {string} data success message
  * @returns {object}
 */
export const passwordChangeSuccess = data => ({
  type: PASSWORD_CHANGE_SUCCESS,
  payload: data,
});

/**
 * @method passwordChangeError
 * @description handles password change error
 * @param {string} data error message
  * @returns {object}
 */
export const passwordChangeError = data => ({
  type: PASSWORD_CHANGE_ERROR,
  payload: data,
});

/**
 * @method ChangePassword
 * @description change user's password
 * @param {string} password
 * @param {string} token
  * @returns {object}
 */
export const ChangePassword = (password, token) => async (dispatch) => {
  try {
    dispatch(loading());

    const resetPassword = await axios.post(
      `${baseUrl}/users/change-password?token=${token}`,
      { newPassword: password },
    );

    dispatch(passwordChangeSuccess(resetPassword.data.message));
  } catch (error) {
    dispatch(passwordChangeError('please send reset password request again'));
  }
};
