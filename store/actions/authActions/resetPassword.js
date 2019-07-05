/* eslint-disable import/prefer-default-export */
import axios from 'axios';

export const loading = () => ({
  type: 'LOADING',
});

export const passwordResetSuccess = data => ({
  type: 'PASSWORD_RESET_SUCCESS',
  payload: data,
});

export const passwordResetError = data => ({
  type: 'PASSWORD_RESET_ERROR',
  payload: data,
});

export const ResetPassword = user => (dispatch) => {
  dispatch(loading());

  return axios('https://freyja-ah-backend.herokuapp.com/api/users/reset', {
    method: 'POST',
    data: { email: user },
    headers: {
      accept: 'application/json',
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then(res => dispatch(passwordResetSuccess(res.data.message)))
    .catch(err => dispatch(passwordResetError(err.response.data.message)));
};
