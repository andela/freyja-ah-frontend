import Axios, { get } from 'axios';
import { GET_COMMUNITY_MESSAGES, GET_COMMUNITY_MESSAGES_ERROR, LOADING, DELETE_SUCCESS, DELETE_ERROR } from './types';

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

export const deleteSuccess = () => ({
  type: DELETE_SUCCESS,
  data: 'message deleted successfully',
});

export const deleteError = data => ({
  type: DELETE_ERROR,
  data,
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

export const deleteCommunityMessage = messageId => async (dispatch) => {
  dispatch(loading());

  try {
    await Axios.delete(`https://freyja-ah-backend.herokuapp.com/api/community/messages/${messageId}`);
    dispatch(deleteSuccess());
  } catch (error) {
    dispatch(deleteError('sorry, you cannot delete this message'));
  }
};
