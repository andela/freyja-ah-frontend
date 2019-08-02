import { get, post } from 'axios';
import {
  GET_COMMUNITY_MESSAGES,
  GET_COMMUNITY_MESSAGES_ERROR,
  INIT_SEND_MSG_REQUEST,
  END_SEND_MSG_REQUEST,
  SET_SENT_MESSAGE,
  LOADING,
} from './types';

const commUrl = 'https://freyja-ah-backend.herokuapp.com/api/community/messages';

export const communityMessageSuccess = data => ({
  type: GET_COMMUNITY_MESSAGES,
  data,
});

export const communityMessageError = data => ({
  type: GET_COMMUNITY_MESSAGES_ERROR,
  data,
});

export const loading = () => ({
  type: LOADING,
});

export const getCommunityMessages = () => async (dispatch) => {
  dispatch(loading());
  try {
    const response = await get('https://freyja-ah-backend.herokuapp.com/api/community/messages', {
      headers: { Authorization: `${localStorage.getItem('token')}` },
    });
    dispatch(communityMessageSuccess(response.data.data));
  } catch (error) {
    dispatch(communityMessageError('internal error'));
  }
};

export const setSentMessage = payload => ({
  type: SET_SENT_MESSAGE,
  payload,
});

export const sendMessage = payload => async (dispatch) => {
  dispatch({ type: INIT_SEND_MSG_REQUEST });

  try {
    const request = await post(commUrl, payload);
    dispatch({
      type: END_SEND_MSG_REQUEST,
    });

    const { communityMessage } = request.data;
    const message = {
      ...communityMessage,
      owner: {
        id: 86,
        firstName: 'Mobolaji',
        lastName: 'Matti',
        userName: 'beejay1212',
        role: 'trainee',
        password: '$2b$06$D8Eh50cVLTplZKxwaQwrbeHBfkh/QrXlLIiDAN3Fthqf/blH.qy/a',
        email: 'mattimobolaji@gmail.com',
        isVerified: true,
      },
    };

    dispatch(setSentMessage(message));
  } catch (error) {
    dispatch({
      type: END_SEND_MSG_REQUEST,
    });

    const { data } = error.response;
    console.log(data);
  }
};
