import * as React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Box } from "@mui/system";
import { DateTimePicker } from "@mui/x-date-pickers";
import { Button, IconButton, Paper } from "@mui/material";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
// import Animation from "../SideAnimation/Animation";
import { useDispatch, useSelector } from "react-redux";
import { ChangeStep, ComponentChange } from "../../redux/action";
import { GetAllAvailableSlots } from "../../apiCalls";
import e from "express";
import { LoadingButton } from "@mui/lab";

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
    BookingData: {
      AreaID: string;
      AreaName: string;
      placeName: string;
      totalSlots: number;
      _id: string;
    }[];
  };
};
export default function RangePicker() {
  const dispatch = useDispatch();
  const { accessToken, BookingData, uid } = useSelector(
    (state: SelectorType) => state?.user
  );

  const handleSubmitRange = (from: number | null, to: number | null) => {
    const start = from !== null ? new Date(from).getTime() : 0;
    const end = to !== null ? new Date(to).getTime() : 0;
    console.log("places=>", BookingData);
    if (start >= new Date().getTime() && end > new Date().getTime()) {
      GetAllAvailableSlots(
        dispatch,
        accessToken,
        {
          start,
          end,
          ...BookingData,
        },
        uid
      );
      dispatch(ChangeStep(3));
    } else {
      console.log("Invalid range");
    }
  };
  const [value1, setValue1] = React.useState<number | null>(null);
  const [value2, setValue2] = React.useState<number | null>(null);
  const [disable, setDisable] = React.useState(true);

  React.useEffect(() => {
    const start = value1 !== null ? new Date(value1).getTime() : 0;
    const end = value2 !== null ? new Date(value2).getTime() : 0;

    if (
      start >= new Date().getTime() &&
      end > new Date().getTime() &&
      start < end
    ) {
      setDisable(false);
      // console.log(value1);
    } else {
      setDisable(true);
    }
  }, [value1, value2]);
  return (
    <div
      className="container"
      style={{
        flexGrow: "1",
        display: "flex",
        width: "100%",
        minHeight: "70vh",
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <Box
        component={"main"}
        style={{
          width: "70%",
          margin: "10px",
          backgroundColor: "#000",
          height: "fit-content",
          borderRadius: "20px",
        }}
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
              color: "#fff",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
            }}
          >
            <Box component={"h2"}> Select Date And Time:</Box>
          </div>
          <Box
            sx={{
              paddingBottom: "40px",

              flexGrow: "1",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
              alignContent: "center",
              minWidth: "95%",
              ".css-nxo287-MuiInputBase-input-MuiOutlinedInput-input": {
                background: "#fff",
              },
              ".css-gqf166-MuiInputBase-root-MuiOutlinedInput-root": {
                background: "#fff",
              },
              ".css-1u3bzj6-MuiFormControl-root-MuiTextField-root": {
                background: "#fff",
              },
            }}
          >
            <div style={{ margin: "10px", width: "90%" }}>
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

            <div style={{ margin: "10px", width: "90%" }}>
              <LocalizationProvider
                dateAdapter={AdapterDateFns}
                style={{ width: "100%", color: "#fff" }}
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
            <LoadingButton
              variant="contained"
              color="secondary"
              onClick={() => handleSubmitRange(value1, value2)}
              className="Authbutton"
              type="submit"
              sx={{
                width: "90%",
                display: "flex",
                flexDirection: "row",
                alignContent: "center",
                justifyContent: "center",
                alignItems: "center",
                margin: "10px",
              }}
              disabled={disable}
            >
              Next
            </LoadingButton>
          </Box>
        </Box>
        {/* </Box> */}
      </Box>
      {/* <Animation /> */}
    </div>
  );
}
