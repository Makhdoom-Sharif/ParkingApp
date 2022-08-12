import {
  GetAllPlacesFail,
  GetAllPlacesStart,
  GetAllPlacesSuccess,
  loginFail,
  loginStart,
  loginSuccess,
  registerFail,
  registerStart,
  registerSuccess,
} from "./redux/action";
import { publicRequest } from "./requestMethod";
import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";

export const login = async (dispatch, Data) => {
  dispatch(loginStart());
  try {
    const { data } = await publicRequest.post("/auth/login", Data);
    console.log("res==>", data.accessToken);
    dispatch(loginSuccess(data));
    GetAllPlaces(dispatch, data.accessToken);
  } catch (e) {
    dispatch(loginFail(e.response.data));
  }
};

export const register = async (dispatch, Data) => {
  dispatch(registerStart());
  try {
    const { data } = await publicRequest.post("/auth/register", Data);
    dispatch(registerSuccess(data));
    // GetTokenLocal();
    console.log("==>>>>>", data);
    GetAllPlaces(dispatch, data.TOKEN);
  } catch (e) {
    // console.log(e.response.data.code);
    dispatch(
      e.response.data.code === 11000
        ? registerFail("Email / Contact no. already in use")
        : registerFail("Error occured")
    );
  }
};

export const GetAllPlaces = async (dispatch, AccessTOKEN) => {
  dispatch(GetAllPlacesStart());
  try {
    const places = await axios.create({
      baseURL: BASE_URL,
      headers: { token: `Bearer ${AccessTOKEN}` },
    });
    const data = await places.get("/places");
    dispatch(GetAllPlacesSuccess(data.data));
    // console.log("data places==>", data);
  } catch (err) {
    dispatch(GetAllPlacesFail(err.response.data));
  }
};
