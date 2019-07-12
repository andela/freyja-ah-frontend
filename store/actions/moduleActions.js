/* eslint-disable import/prefer-default-export */
import { get } from 'axios';
import { GET_ALL_MODULES, GET_ALL_MODULES_ERROR } from './types';

const getModules = () => async (dispatch) => {
  try {
    const modules = await get('https://freyja-ah-backend.herokuapp.com/api/modules', {
      headers: { Authorization: `${localStorage.getItem('token')}` },
    });
    console.log(modules);
    return dispatch({
      type: GET_ALL_MODULES,
      payload: modules,
    });
  } catch (error) {
    return dispatch({
      type: GET_ALL_MODULES_ERROR,
      payload: error,
    });
  }
};

export { getModules };
