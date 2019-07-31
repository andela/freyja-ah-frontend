import { GET_MESSAGE_SUCCESS, UPDATE_MESSAGE_LIST } from '../actions/types';

const initialState = {
  data: [],
};

export default (state = initialState, actions) => {
  switch (actions.type) {
    case GET_MESSAGE_SUCCESS:
      return {
        ...state,
        data: actions.messages,
      };
    case UPDATE_MESSAGE_LIST: {
      return {
        ...state,
        data: actions.data,
      };
    }
    default:
      return state;
  }
};
