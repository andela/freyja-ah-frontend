import modulesReducer from '../../store/reducers/modulesReducer';
import modules from './modulesMock/modulesMock';

const initialState = {
  allModules: [],
  errors: {},
  isLoading: false,
  singleModule: {},
};

describe('Module reducer', () => {
  it('should set default state', () => {
    const state = modulesReducer(undefined, { type: '@@INIT' });

    expect(state).toEqual(initialState);
  });

  it('should initialize get request', () => {
    const state = modulesReducer(initialState, {
      type: 'INIT_MODULE_REQUEST',
    });
    expect(state).toEqual({
      ...initialState,
      isLoading: true,
    });
  });

  it('should get all modules', () => {
    const state = modulesReducer(initialState, {
      type: 'GET_ALL_MODULES',
      payload: modules,
    });
    expect(state).toEqual({
      ...initialState,
      allModules: state.allModules,
    });
  });

  it('should get single module', () => {
    const state = modulesReducer(initialState, {
      type: 'GET_SINGLE_MODULE',
      payload: [],
    });
    expect(state).toEqual({
      ...initialState,
      singleModule: [],
    });
  });

  it('should return error when there is an error geting modules', () => {
    const state = modulesReducer(initialState, {
      type: 'MODULES_ERROR',
      payload: 'error',
    });
    expect(state).toEqual({
      ...initialState,
      errors: state.errors,
    });
  });
});
