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

export const SelectedPlace = (Data) => ({
  type: type.SELECTED_PLACE,
  payload: Data,
});

export const GetAllAvailableSlotsArray = (Data) => ({
  type: type.GET_ALL_AVAILABLE_SLOTS,
  payload: {
    SlotsData: Data.SlotsData,
    BookingData: Data.Data,
  },
});
export const ChangeStep = (Data) => ({
  type: type.CHANGE_STEP,
  payload: Data,
});
export const NewBookingData = (Data) => ({
  type: type.NEW_BOOKING_DATA,
  payload: Data,
});
export const ConfirmationModal = (Data) => ({
  type: type.CONFIRMATION_MODAL,
  payload: Data,
});

export const GetAllPendingBooking = (Data) => ({
  type: type.GET_ALL_PENDING_BOOKING,
  payload: Data,
});
export const GetAllHistory = (Data) => ({
  type: type.GET_ALL_HISTORY,
  payload: Data,
});

// export const DeleteBookingSuccess = (Data) => ({
//   type: type.DELETE_BOOKING_SUCCESS,
//   payload:Data
// })
