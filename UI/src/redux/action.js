import * as type from "./actionType";

export const loginStart = () => ({
  type: type.LOGIN_START
});
export const loginSuccess = (Data) => ({
  type: type.LOGIN_SUCCESS,
  payload: Data
});
export const loginFail = (Data) => ({
  type: type.LOGIN_FAIL,
  payload: Data
});


export const registerStart = () => ({
  type: type.REGISTER_START
});
export const registerSuccess = (Data) => ({
  type: type.REGISTER_SUCCESS,
  payload: Data
});
export const registerFail = (Data) => ({
  type: type.REGISTER_FAIL,
  payload: Data
});


