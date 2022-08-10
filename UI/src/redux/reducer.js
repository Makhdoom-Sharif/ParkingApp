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
  errorMessage: ""
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.REGISTER_START:
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
        accessToken: action.payload.accessToken

      }
    case type.REGISTER_FAIL:
    case type.LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload
      }
    default:
      return state;
  }
};
export default userReducer;
