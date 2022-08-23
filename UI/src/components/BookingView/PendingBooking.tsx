import React from "react";
import { useSelector } from "react-redux";
import NoDataFoundView from "../NoDataFoundView/NoDataFoundView";
import DisplayBookings from "./DisplayBookings";
// import DisplayBooking from "./DisplayBookings";
type Props = {};
type SelectorType = {
  user: {
    pendingBookings: {
      _id?: string;
      userID?: string;
      from?: number;
      to?: number;
      slotNo?: string;
      slotID?: string;
      AreaName?: string;
      placeName?: string;
    }[];
  };
};
const PendingBooking = (props: Props) => {
  const { pendingBookings } = useSelector((state: SelectorType) => state?.user);

  return (
    <>
      {pendingBookings.length > 0 ? (
        <DisplayBookings Data={pendingBookings} />
      ) : (
        <NoDataFoundView />
      )}
    </>
  );
};

export default PendingBooking;
