import * as React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Box } from "@mui/system";
import { DateTimePicker } from "@mui/x-date-pickers";
import { Button, IconButton, Paper } from "@mui/material";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import Animation from "../SideAnimation/Animation";
import { useDispatch, useSelector } from "react-redux";
import { ComponentChange } from "../../redux/action";
import { GetAllAvailableSlots } from "../../apiCalls";

type Props = {
  // TimeScreenSwapper: Function;
  // SubmitRange: Function;
};
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
    SelectedPlace: {
      _id: String;
      placeName: string;
      AreaID: String;
      totalSlots: Number;
    };
  };
};
export default function RangePicker() {
  const dispatch = useDispatch();
  const { accessToken, SelectedPlace } = useSelector(
    (state: SelectorType) => state?.user
  );

  // const { TimeScreenSwapper } = props
  const handleSubmitRange = (from: number | null, to: number | null) => {
    const start = from !== null ? new Date(from).getTime() : 0;
    const end = to !== null ? new Date(to).getTime() : 0;
    console.log(SelectedPlace);
    GetAllAvailableSlots(dispatch, accessToken, {
      start,
      end,
      ...SelectedPlace,
    });
    dispatch(ComponentChange("SlotsView"));
  };
  const [value1, setValue1] = React.useState<number | null>(null);
  const [value2, setValue2] = React.useState<number | null>(null);

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
        <Box
          component={"main"}
          style={{ width: "100%", height: "50%", margin: "10px" }}
        >
          <Box
            style={{
              width: "100%",
              height: "80%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "100%",

                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
              }}
            >
              <IconButton
                style={{ color: "#000" }}
                // onClick={() => TimeScreenSwapper()}
              >
                <ArrowCircleLeftIcon style={{ fontSize: "2.25rem" }} />
              </IconButton>
              <Box component={"h2"}> Select Date And Time:</Box>
            </div>
            <Box
              style={{
                flexGrow: "1",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "center",
                alignContent: "center",
                minWidth: "70%",
              }}
            >
              <div style={{ margin: "10px", width: "100%" }}>
                <LocalizationProvider
                  dateAdapter={AdapterDateFns}
                  style={{ width: "100%" }}
                >
                  <DateTimePicker
                    renderInput={(props) => (
                      <TextField {...props} style={{ width: "100%" }} />
                    )}
                    label="From"
                    value={value1}
                    onChange={(newValue: number | null) => {
                      setValue1(newValue);
                    }}
                    minDateTime={Date.now()}
                  />
                </LocalizationProvider>
              </div>

              <div style={{ margin: "10px", width: "100%" }}>
                <LocalizationProvider
                  dateAdapter={AdapterDateFns}
                  style={{ width: "100%" }}
                >
                  <DateTimePicker
                    renderInput={(props) => (
                      <TextField {...props} style={{ width: "100%" }} />
                    )}
                    label="To"
                    value={value2}
                    onChange={(newValue: number | null) => {
                      setValue2(newValue);
                    }}
                    minDateTime={Date.now()}
                  />
                </LocalizationProvider>
              </div>
            </Box>
            <Button
              variant="contained"
              onClick={() => handleSubmitRange(value1, value2)}
              // fullWidth
              style={{
                background: "#000",
                color: "#fff",
                width: "70%",
                display: "flex",
                flexDirection: "row",
                alignContent: "center",
                justifyContent: "center",
                alignItems: "center",
                margin: "10px",
              }}
            >
              Next
            </Button>
          </Box>
        </Box>
      </Box>
      <Animation />
    </div>
  );
}
