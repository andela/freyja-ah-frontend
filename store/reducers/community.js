import {
  GET_COMMUNITY_MESSAGES,
  GET_COMMUNITY_MESSAGES_ERROR,
  INIT_SEND_MSG_REQUEST,
  END_SEND_MSG_REQUEST,
  SET_SENT_MESSAGE,
  LOADING,
} from '../actions/types';

export const initialState = {
  error: null,
  allMessages: [],
  isLoading: false,
  sendMsgLoading: false,
};

export default (state = initialState, action) => {
  const addSentMessage = message => (state.allMessages.unshift(message));

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
        allMessages: {},
        isLoading: false,
        error: action.data,
      };
    case LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case INIT_SEND_MSG_REQUEST:
      return {
        ...state,
        sendMsgLoading: true,
      };
    case END_SEND_MSG_REQUEST:
      return {
        ...state,
        sendMsgLoading: false,
      };
    case SET_SENT_MESSAGE:
      return {
        ...state,
        allMessages: addSentMessage(action.payload),
      };

    default:
      return state;
  }
};
