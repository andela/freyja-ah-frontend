import * as actionTypes from '../constants/profileContants';

export const initialState = {
  error: null,
  data: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PROFILE_SUCCESS:
      return {
        ...state,
        data: action.data,
      };
    case actionTypes.GET_PROFILE_FAILED:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};
