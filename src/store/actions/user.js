import * as types from '../types';

export const signupRequest = ({ email, password }) => ({
  type: types.SIGNUP_REQUEST,
  email,
  password,
});

export const loginRequest = () => ({
  type: types.LOGIN_REQUEST
});

export const loginSuccess = (user) => ({
  type: types.LOGIN_SUCCESS,
  user,
});

export const loginError = (error) => ({
  type: types.LOGIN_ERROR,
  error,
});

export const logoutRequest = () => ({
  type: types.LOGOUT_REQUEST
});

export const logoutSuccess = () => ({
  type: types.LOGOUT_SUCCESS,
});

export const logoutError = (error) => ({
  type: types.LOGIN_ERROR,
  error,
});



