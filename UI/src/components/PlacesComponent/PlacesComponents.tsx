import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import "./style.css";
// import { GetTokenLocal } from "../../requestMethod";
import { useDispatch, useSelector } from "react-redux";
import {
  ChangeStep,
  ComponentChange,
  NewBookingData,
  SelectedPlace,
} from "../../redux/action";
// import Animation from "../SideAnimation/Animation";
import Main from "../Cards/Main";

type Props = {};
type SelectorType = {
  user: {
    accessToken: string;
    contactNo: string;
    email: string;
    errorMessage: string;
    isAdmin: boolean;
    loading: boolean;
    loginStatus: boolean;
    uid: string;
    username: string;
    allPlaces: {
      _id: string;
      placeName: string;
      totalSlots: Number;
      AreaID: String;
    }[];

    BookingData: {
      AreaName: String;
    }[];
  };
};
type SelectedPlace = {
  _id: String;
  placeName: string;
  AreaID: String;
  totalSlots: Number;
};
const ParkingPlaces = (props: Props) => {
  const dispatch = useDispatch();
  const DetailsUser = useSelector((state: SelectorType) => state?.user);
  const { allPlaces, BookingData } = DetailsUser;
  // const handlePlaceSubmit = (item: SelectedPlace) => {
  //   const Data = { ...BookingData, ...item };
  //   dispatch(NewBookingData(Data));
  //   dispatch(ChangeStep(2));
  // };
  return (
    <Main
      Data={allPlaces}
      // handleSelect={handlePlaceSubmit}
      place={true}
      area={false}
    />
  );
};

export default ParkingPlaces;
