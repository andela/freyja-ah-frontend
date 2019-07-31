import axios from 'axios';
import { GET_MESSAGE_SUCCESS, UPDATE_MESSAGE_LIST } from './types';

const url = 'http://localhost:3000/api/messages/';
export const getMessageSuccess = messages => ({
  type: GET_MESSAGE_SUCCESS,
  messages,
});

export const updateMessages = data => ({
  type: UPDATE_MESSAGE_LIST,
  data,
});

export const getMessage = () => (dispatch) => {
  axios.get(url, {
    headers: { Authorization: `${localStorage.getItem('token')}` },
  })
    .then((res) => {
      console.log('TCL: getMessage -> res', res.data.data);
      dispatch(getMessageSuccess(res.data.data));
    })
    .catch(error => console.log(error));
};
