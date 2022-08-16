import {
  GetAllAreaFail,
  GetAllAreasInit,
  GetAllAreasSuccess,
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
    // GetAllPlaces(dispatch, data.accessToken);
    GetAllAreas(dispatch, data.accessToken);
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

export const GetAllPlaces = async (dispatch, AccessTOKEN, AreaID) => {
  dispatch(GetAllPlacesStart());
  // console.log("=>", AreaID);
  try {
    const places = await axios.create({
      baseURL: BASE_URL,
      headers: { token: `Bearer ${AccessTOKEN}` },
    });
    // const Data = { AreaID: AreaID };
    const data = await places.get(`/places/?AreaID=${AreaID}`);
    dispatch(GetAllPlacesSuccess(data.data));
    // console.log("data places==>", data);
  } catch (err) {
    dispatch(GetAllPlacesFail(err.response.data));
  }
};

export const GetAllAreas = async (dispatch, AccessTOKEN) => {
  dispatch(GetAllAreasInit());
  // console.log("==>", AccessTOKEN);
  try {
    const Areas = await axios.create({
      baseURL: BASE_URL,
      headers: { token: `Bearer ${AccessTOKEN}` },
    });
    const data = await Areas.get("/area/findAll");
    console.log(data.data);
    dispatch(GetAllAreasSuccess(data.data));
  } catch (err) {
    console.log(err);
    dispatch(GetAllAreaFail());
  }
};

export const GetAllAvailableSlots = async (dispatch, AccessTOKEN, Data) => {
  // dispatch(GetAllSlotsInit())
  const { to, from, parkingPlaceID } = Data;
  try {
    const Slots = await axios.create({
      baseURL: BASE_URL,
      headers: { token: `Bearer ${AccessTOKEN}` },
    });
    const data = await Slots.get(
      `/newbooking/?parkingPlaceID=${parkingPlaceID}&from${from}$to${to}`
    );
  } catch (e) {
    console.log(e);
  }
};
