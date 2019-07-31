import { GET_COMMUNITY_MESSAGES, GET_COMMUNITY_MESSAGES_ERROR, LOADING, DELETE_SUCCESS, DELETE_ERROR } from '../actions/types';

export const initialState = {
  error: null,
  allMessages: [],
  isLoading: false,
  deleteSuccess: '',
  deleteError: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMUNITY_MESSAGES:
      return {
        ...state,
        allMessages: action.data,
        isLoading: false,
        error: null,
      };
    case GET_COMMUNITY_MESSAGES_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.data,
      };
    case LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case DELETE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        deleteSuccess: action.data,
      };
    case DELETE_ERROR:
      return {
        ...state,
        isLoading: false,
        deleteError: action.data,
      };
    default:
      return state;
  }
};
