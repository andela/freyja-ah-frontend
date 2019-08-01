import { get } from 'axios';
import {
  GET_ALL_MODULES, GET_SINGLE_MODULE, MODULES_ERROR, INIT_MODULE_REQUEST,
} from './types';
import { baseUrl } from '../../utils/config';

/**
 * @method getModules
 * @description get all course modules
  * @returns {object}
 */
export const getModules = () => async (dispatch) => {
  try {
    const modulesRequest = await get(`${baseUrl}/modules`, {
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

/**
 * @method setModules
 * @description set current module
 * @param {object} payload module object
  * @returns {object}
 */
export const setModule = payload => ({
  type: GET_SINGLE_MODULE,
  payload,
});

export const getModule = moduleId => async (dispatch) => {
  try {
    dispatch({ type: INIT_MODULE_REQUEST });
    const request = await get(`${baseUrl}/modules/${moduleId}`);
    const { data } = request.data;
    dispatch(setModule(data));
  } catch (error) {
    dispatch({
      type: MODULES_ERROR,
      payload: error,
    });
  }
};
