import * as types from '../types';

const getInitialState = () => ({
  user: null,
  loading: false,
  error: null,
});

const initialState = getInitialState();

const loginRequest = (state) => ({
  ...state,
  loading: true,
  error: null,
});

const loginSuccess = (state, action) => ({
  ...state,
  loading: false,
  user: action.user,
});

const loginError = (state, action) => ({
  ...state,
  error: action.error,
  loading: false,
});

const logoutRequest = (state) => ({
  ...state,
  loading: true,
  error: null,
});

const logoutSuccess = () => ({
  ...getInitialState(),
});

const logoutError = (state, action) => ({
  ...state,
  loading: false,
  error: action.error,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGNUP_REQUEST:
    case types.LOGIN_REQUEST:
      return loginRequest(state, action);
    case types.LOGIN_SUCCESS:
      return loginSuccess(state, action);
    case types.LOGIN_ERROR:
      return loginError(state, action);
    case types.LOGOUT_REQUEST:
      return logoutRequest(state, action);
    case types.LOGOUT_SUCCESS:
      return logoutSuccess(state, action);
    case types.LOGOUT_FAILURE:
      return logoutError(state, action);
    default:
      return state;
  }
};

export default reducer;
