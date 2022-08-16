import { ActionTypes } from "@mui/base";
import * as type from "./actionType";

export const loginStart = () => ({
  type: type.LOGIN_START,
});
export const loginSuccess = (Data) => ({
  type: type.LOGIN_SUCCESS,
  payload: Data,
});
export const loginFail = (Data) => ({
  type: type.LOGIN_FAIL,
  payload: Data,
});

export const registerStart = () => ({
  type: type.REGISTER_START,
});
export const registerSuccess = (Data) => ({
  type: type.REGISTER_SUCCESS,
  payload: Data,
});
export const registerFail = (Data) => ({
  type: type.REGISTER_FAIL,
  payload: Data,
});

export const logoutStart = () => ({
  type: type.LOGOUT_START,
});
export const logoutSuccess = () => ({
  type: type.LOGOUT_SUCCESS,
});
export const logoutFail = (Data) => ({
  type: type.LOGOUT_FAIL,
  payload: Data,
});

export const GetAllPlacesStart = () => ({
  type: type.GET_ALL_PLACES_START,
});
export const GetAllPlacesSuccess = (Data) => ({
  type: type.GET_ALL_PLACES_SUCCESS,
  payload: Data,
});
export const GetAllPlacesFail = (Data) => ({
  type: type.GET_ALL_PLACES_FAIL,
  payload: Data,
});

export const GetAllAreasInit = () => ({
  type: type.GET_ALL_AREAS_START,
});

export const GetAllAreasSuccess = (Data) => ({
  type: type.GET_ALL_AREAS_SUCCESS,
  payload: Data,
});

export const GetAllAreaFail = () => ({
  type: type.GET_ALL_AREAS_FAIL,
});

export const ComponentChange = (Data) => ({
  type: type.COMPONENT_CHANGE,
  payload: Data,
});
