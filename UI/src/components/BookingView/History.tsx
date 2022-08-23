import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import NoDataFoundView from "../NoDataFoundView/NoDataFoundView";
import DisplayBookings from "./DisplayBookings";

type Props = {};
type SelectorType = {
  user: {
    history: {
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
const History = (props: Props) => {
  const { history } = useSelector((state: SelectorType) => state?.user);
  return (
    <>
      {history.length > 0 ? (
        <DisplayBookings Data={history} />
      ) : (
        <NoDataFoundView />
      )}
    </>
  );
};

export default History;
