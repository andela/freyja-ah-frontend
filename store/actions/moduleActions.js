import { get } from 'axios';
import {
  GET_ALL_MODULES, GET_SINGLE_MODULE, MODULES_ERROR,
} from './types';

const baseUrl = 'https://freyja-ah-backend.herokuapp.com/api/';

const getModules = () => async (dispatch) => {
  try {
    const modulesRequest = await get('https://freyja-ah-backend.herokuapp.com/api/modules', {
      headers: { Authorization: `${localStorage.getItem('token')}` },
    });

    const { data } = modulesRequest.data;
    return dispatch({
      type: GET_ALL_MODULES,
      payload: data,
    });
  } catch (error) {
    return dispatch({
      type: MODULES_ERROR,
      payload: error,
    });
  }
};


export const setModule = payload => ({
  type: GET_SINGLE_MODULE,
  payload,
});

export const getModule = moduleId => async (dispatch) => {
  try {
    const request = await get(`${baseUrl}/modules/${moduleId}`);
    const { data } = request.data;
    dispatch(setModule(data));
  } catch (error) {
    console.log(error.response);
    dispatch({
      type: MODULES_ERROR,
      payload: error,
    });
  }
};

export { getModules };
