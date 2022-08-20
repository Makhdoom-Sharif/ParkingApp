import { LoadingButton } from "@mui/lab";
import { CircularProgress } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllPlaces } from "../../apiCalls";
import {
  ChangeStep,
  ConfirmationModal,
  NewBookingData,
} from "../../redux/action";

type Props = {
  item?: {
    _id?: String;
    AreaName?: String;
    TotalPlaces?: Number;
    placeName?: string;
    totalSlots?: Number;
    AreaID?: String;
    slotNo?: String;
    parkingPlaceID?: String;
  };
  area: boolean;
  place: boolean;
};
type SelectorType = {
  user: {
    loading: boolean;
    accessToken: string;
    BookingData: {
      AreaName: String;
    }[];
  };
};
const Button = (props: Props) => {
  const dispatch = useDispatch();
  const { item, area, place } = props;
  const [load, setLoad] = useState(false);
  const { accessToken, loading, BookingData } = useSelector(
    (state: SelectorType) => state?.user
  );
  const handleAreaSelect = async () => {
    try {
      setLoad(true);
      await GetAllPlaces(dispatch, accessToken, item);
      setLoad(false);
    } catch (e) {
      setLoad(false);
    }
  };
  const handlePlaceSubmit = () => {
    setLoad(true);
    const Data = { ...BookingData, ...item };
    dispatch(NewBookingData(Data));
    dispatch(ChangeStep(2));
    setLoad(false);
  };
  const handleSlotSubmit = () => {
    setLoad(true);
    const Data = { ...item, ...BookingData };
    console.log(Data);
    dispatch(NewBookingData(Data));
    dispatch(ConfirmationModal(true));
    setLoad(false);
  };
  const handleClick = () => {
    if (area && !place) {
      handleAreaSelect();
    } else if (!area && place) {
      handlePlaceSubmit();
    } else {
      handleSlotSubmit();
    }
  };
  return (
    <LoadingButton
      variant="contained"
      fullWidth
      loadingIndicator={
        <CircularProgress style={{ color: "#fff" }} size={16} />
      }
      className="Cardsbutton"
      sx={{
        textTransform: "none",
      }}
      type="submit"
      disabled={loading}
      loading={load}
      onClick={() => handleClick()}
    >
      Select
    </LoadingButton>
  );
};

export default Button;
