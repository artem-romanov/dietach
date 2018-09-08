import * as types from '../types';

const getInitialState = () => ({
  user: null,
  loading: false,
  error: null,
});

const initialState = getInitialState();

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case types.LOGIN_SUCESS:
      return {
        ...state,
        loading: false,
        user: action.user,
      }
    case types.LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export default reducer;
