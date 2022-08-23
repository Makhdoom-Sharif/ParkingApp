import {
  ChangeStep,
  GetAllAreaFail,
  GetAllAreasInit,
  GetAllAreasSuccess,
  GetAllAvailableSlotsArray,
  GetAllHistory,
  GetAllPendingBooking,
  GetAllPlacesFail,
  GetAllPlacesStart,
  GetAllPlacesSuccess,
  loginFail,
  loginStart,
  loginSuccess,
  NewBookingData,
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
    dispatch(loginSuccess(data));
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
    GetAllPlaces(dispatch, data.TOKEN);
  } catch (e) {
    dispatch(
      e.response.data.code === 11000
        ? registerFail("Email / Contact no. already in use")
        : registerFail("Error occured")
    );
  }
};

export const GetAllPlaces = async (dispatch, AccessTOKEN, item) => {
  const { _id, AreaName } = item;
  dispatch(GetAllPlacesStart());
  try {
    const places = await axios.create({
      baseURL: BASE_URL,
      headers: { token: `Bearer ${AccessTOKEN}` },
    });
    const data = await places.get(`/places/?AreaID=${_id}`);
    dispatch(GetAllPlacesSuccess(data.data));
    dispatch(NewBookingData({ AreaName: AreaName }));
    dispatch(ChangeStep(1));
  } catch (err) {
    dispatch(GetAllPlacesFail(err.response.data));
  }
};

export const GetAllAreas = async (dispatch, AccessTOKEN) => {
  dispatch(GetAllAreasInit());
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

export const GetAllAvailableSlots = async (
  dispatch,
  AccessTOKEN,
  Data,
  uid
) => {
  const { start, end, _id, totalSlots, AreaID, placeName } = Data;
  try {
    const Slots = await axios.create({
      baseURL: BASE_URL,
      headers: { token: `Bearer ${AccessTOKEN}` },
    });
    const data = await Slots.get(
      `/newbooking/?parkingPlaceID=${_id}&from=${start}&to=${end}&slots=${totalSlots}`
    );
    const item = {
      ...{ Data: Data },

      ...{ SlotsData: data.data },
    };
    dispatch(GetAllAvailableSlotsArray(item));
  } catch (e) {
    console.log(e);
  }
};
export const PostNewBooking = async (Data) => {
  console.log(Data);
  const {
    accessToken,
    AreaName,
    placeName,
    parkingPlaceID,
    uid,
    start,
    end,
    slotNo,
    slotID,
  } = Data;
  const PostBooking = await axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${accessToken}` },
  });
  return await PostBooking.post("/newbooking/new", {
    AreaName,
    placeName,
    parkingPlaceID,
    userID: uid,
    from: start,
    to: end,
    slotID,
    slotNo,
  });
};
export const GetUserBookings = async (Data) => {
  const { AccessTOKEN, qCategory, userID, dispatch } = Data;
  try {
    const GetBookings = await axios.create({
      baseURL: BASE_URL,
      headers: { token: `Bearer ${AccessTOKEN}` },
    });

    const data = await GetBookings.get(
      `/newbooking/find?qCategory=${qCategory}&userID=${userID}`
    );
    console.log(data.data);
    qCategory === "pending"
      ? dispatch(GetAllPendingBooking(data.data))
      : dispatch(GetAllHistory(data.data));
  } catch (e) {
    console.log(e);
  }
};

export const DeleteUserBooking = async (Data) => {
  const { _id, uid, dispatch, AccessTOKEN } = Data;
  const DeleteBooking = await axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${AccessTOKEN}` },
  });
  return await DeleteBooking.delete(
    `/newbooking/?BookingID=${_id}&userID=${uid}`
  );
};
