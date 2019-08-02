import { get } from 'axios';
import { GET_COMMUNITY_MESSAGES, GET_COMMUNITY_MESSAGES_ERROR, LOADING } from './types';
import { baseUrl } from '../../utils/config';

/**
 * @method communityMessageSuccess
 * @param {string} data success message
  * @returns {object}
 */
export const communityMessageSuccess = data => ({
  type: GET_COMMUNITY_MESSAGES,
  data,
});

/**
 * @method communityMessageSuccess
 * @param {string} data error message
  * @returns {object}
 */
export const communityMessageError = data => ({
  type: GET_COMMUNITY_MESSAGES_ERROR,
  data,
});

/**
 * @method loading
 * @description initiates loading
  * @returns {object}
 */
export const loading = () => ({
  type: LOADING,
});

/**
 * @method communityMessageSuccess
 * @description get all community messages
  * @returns {object}
 */
export const getCommunityMessages = () => async (dispatch) => {
  dispatch(loading());
  try {
    const response = await get(`${baseUrl}/community/messages`, {
      headers: { Authorization: `${localStorage.getItem('token')}` },
    });
    dispatch(communityMessageSuccess(response.data.data));
  } catch (error) {
    dispatch(communityMessageError('internal error'));
  }
};
