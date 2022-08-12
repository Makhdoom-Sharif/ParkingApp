import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import "./style.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import RangePicker from "./RangePicker/RangePicker";
import { GetAllPlaces } from "../../apiCalls";
// import { GetTokenLocal } from "../../requestMethod";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

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
    }[];
  };
};

const ParkingPlaces = (props: Props) => {
  // const dispatch = useDispatch();
  const [IsScreenSwap, setIsScreenSwap] = useState(false);
  const DetailsUser = useSelector((state: SelectorType) => state?.user);
  const { allPlaces } = DetailsUser;
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   // console.log("first===>", allPlaces);
  //   GetTokenLocal();
  //   GetAllPlaces(dispatch);
  //   // CallT();
  //   // GetAllPlaces(dispatch);
  // }, []);

  const TimeScreenSwapper = (id: string) => {
    console.log("placeID", id);
    if (IsScreenSwap) {
      setIsScreenSwap(false);
    } else {
      setIsScreenSwap(true);
    }
  };

  const SubmitRange = (value1: string, value2: string) => {
    const start = new Date(value1).getTime();
    const end = new Date(value2).getTime();
    const Duration = end - start;
    console.log("ranges", start, end);
    console.log("duration", Duration);
    // const S = moment.utc();

    // const rtf = new Intl.RelativeTimeFormat("en");
    // const formatDuration = rtf.format(Duration, "second");
    // console.log("==>", S);
    //→'in 3.14 seconds'
    // rtf.format(-15, "minute");
    //→'15 minutes ago'
  };
  // const Data: Array<String> = [
  //   "Defence Phase VIII",
  //   "Jinnah Internation Airpot",
  //   "Empress Market Karachi",
  //   "Millennium Mall",
  //   "Tariq Road",
  // ];
  return (
    <div
      className="container"
      style={{ flexGrow: "1", display: "flex", width: "100%" }}
    >
      <Box
        component="main"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          width: "50%",
        }}
      >
        {!IsScreenSwap ? (
          allPlaces?.map((item, index) => {
            return (
              <Button
                variant="contained"
                className="button"
                color="secondary"
                fullWidth
                onClick={() => TimeScreenSwapper(item._id)}
              >
                <p> {item.placeName}</p>
                <ArrowForwardIosIcon style={{ fontSize: "1rem" }} />
              </Button>
            );
          })
        ) : (
          <RangePicker
            TimeScreenSwapper={TimeScreenSwapper}
            SubmitRange={SubmitRange}
          />
        )}
      </Box>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          alignContent: "center",
          flexWrap: "wrap",
          width: "50%",
        }}
      >
        <Box component={"img"} src="https://i.ibb.co/Tvyjm5B/carpark.png"></Box>
      </div>
    </div>
  );
};

export default ParkingPlaces;
