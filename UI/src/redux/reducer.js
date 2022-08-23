import * as type from "./actionType";

const initialState = {
  loading: false,
  loginStatus: false,
  uid: "",
  isAdmin: false,
  email: "",
  username: "",
  contactNo: "",
  accessToken: "",
  errorMessage: "",
  allPlaces: [],
  allAreas: [],
  ComponentChange: "",
  allSlots: [],
  SelectedPlace: {},
  StepNo: 0,
  ModalOpen: false,
  BookingData: {},
  pendingBookings: [],
  history: [],
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_ALL_AREAS_START:
    case type.GET_ALL_PLACES_START:
    case type.REGISTER_START:
    case type.LOGIN_START:
    case type.LOGIN_START:
      return { ...state, loading: true };
    case type.REGISTER_SUCCESS:
    case type.LOGIN_SUCCESS:
      // console.log("reducer", action.payload)
      return {
        ...state,
        loading: false,
        loginStatus: true,
        uid: action.payload._id,
        email: action.payload.email,
        username: action.payload.username,
        contactNo: action.payload.contactNo,
        isAdmin: action.payload.isAdmin,
        accessToken: action.payload.accessToken,
      };
    case type.GET_ALL_AREAS_FAIL:
    case type.GET_ALL_PLACES_FAIL:
    case type.REGISTER_FAIL:
    case type.LOGIN_FAIL:
    case type.LOGOUT_FAIL:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload,
      };
    case type.LOGOUT_SUCCESS:
      return {
        loading: false,
        loginStatus: false,
        uid: "",
        isAdmin: false,
        email: "",
        username: "",
        contactNo: "",
        accessToken: "",
        errorMessage: "",
        allPlaces: [],
        allAreas: [],
        ComponentChange: "",
        allSlots: [],
        SelectedPlace: {},
        StepNo: 0,
        ModalOpen: false,
        BookingData: {},
        pendingBookings: [],
        history: [],
      };
    case type.GET_ALL_PLACES_SUCCESS:
      return {
        ...state,
        allPlaces: action.payload,
        loading: false,
      };
    case type.GET_ALL_AREAS_SUCCESS:
      return {
        ...state,
        allAreas: action.payload,
        loading: false,
      };
    case type.COMPONENT_CHANGE:
      return {
        ...state,
        ComponentChange: action.payload,
      };
    case type.SELECTED_PLACE:
      return {
        ...state,
        SelectedPlace: action.payload,
      };
    case type.GET_ALL_AVAILABLE_SLOTS:
      return {
        ...state,
        allSlots: action.payload.SlotsData,
        BookingData: action.payload.BookingData,
      };
    case type.CHANGE_STEP:
      return {
        ...state,
        StepNo: action.payload,
      };
    case type.CONFIRMATION_MODAL:
      return {
        ...state,
        ModalOpen: action.payload,
      };
    case type.NEW_BOOKING_DATA:
      return {
        ...state,
        BookingData: action.payload,
      };
    case type.GET_ALL_PENDING_BOOKING:
      return {
        ...state,
        pendingBookings: action.payload,
      };
    case type.GET_ALL_HISTORY:
      return {
        ...state,
        history: action.payload,
      };
    // case type.DELETE_BOOKING_SUCCESS:
    //   return {
    //     ...state,

    //   }
    default:
      return state;
  }
};
export default userReducer;
