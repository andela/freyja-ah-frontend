import { get } from 'axios';
import { GET_COMMUNITY_MESSAGES, GET_COMMUNITY_MESSAGES_ERROR } from './types';

export const getCommunityMessages = () => async (dispatch) => {
  try {
    const response = await get('https://freyja-ah-backend.herokuapp.com/api/community/messages', {
      headers: { Authorization: `${localStorage.getItem('token')}` },
    });
    console.log(response);
  } catch (error) {
    console.log(error.response);
  }
};
