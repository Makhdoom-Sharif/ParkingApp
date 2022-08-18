import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChangeStep } from "../../redux/action";
import AreaView from "./ParkingView/AreaView";
import DateTimeRangeView from "./ParkingView/DateTimeRangeView";
import PlaceView from "./ParkingView/PlaceView";
import SlotsView from "./ParkingView/SlotsView";

const steps = [
  "Select Area",
  "Select Place",
  "Select Date & Time Range",
  "Select Slot no.",
];

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
    StepNo: number;
  };
};

export default function ParkingStepper() {
  const dispatch = useDispatch();
  const { StepNo } = useSelector((state: SelectorType) => state?.user);

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());

  const isStepOptional = (step: number) => {
    return step === 1;
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    // dispatch(ChangeStep())
    // let newSkipped = skipped;
    // if (isStepSkipped(activeStep)) {
    //   newSkipped = new Set(newSkipped.values());
    //   newSkipped.delete(activeStep);
    // }
    // setActiveStep((prevActiveStep) => prevActiveStep + 1);
    // setSkipped(newSkipped);
  };

  const handleBack = () => {
    if (StepNo === 0) {
    } else {
      let x: number = StepNo;
      // console.log(--x);
      dispatch(ChangeStep(--x));
      // setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }
  };

  // const handleSkip = () => {
  //   if (!isStepOptional(activeStep)) {
  //     // You probably want to guard against something like this,
  //     // it should never occur unless someone's actively trying to break something.
  //     throw new Error("You can't skip a step that isn't optional.");
  //   }

  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  //   setSkipped((prevSkipped) => {
  //     const newSkipped = new Set(prevSkipped.values());
  //     newSkipped.add(activeStep);
  //     return newSkipped;
  //   });
  // };

  const handleReset = () => {
    // setActiveStep(0);
  };

  return (
    <Box sx={{ width: "100%", marginTop: "15px" }}>
      <Box
        component={"div"}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <Box
          component={"span"}
          // size="small"
          sx={{
            color: StepNo === 0 ? "#616161" : "#000 !important",
            display: "flex",
            flexDirection: "row",
            alignContent: "center",
            alignItems: "center",
            cursor: "pointer",
            flexGrow: "1",
            paddingLeft: "5px",
          }}
          // onClick={() => TimeScreenSwapper()}
          onClick={handleBack}
        >
          <KeyboardBackspaceIcon style={{ fontSize: "1.25rem" }} />
          <Box component={"p"} sx={{ paddingLeft: "5px" }}>
            Back
          </Box>
        </Box>

        <Stepper activeStep={StepNo} sx={{ width: "80%", marginRight: "10%" }}>
          {steps.map((label, index) => {
            const stepProps: { completed?: boolean } = {};
            const labelProps: {
              optional?: React.ReactNode;
            } = {};
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step
                key={label}
                {...stepProps}
                sx={{
                  ".css-1dy419t-MuiStepIcon-text": {
                    fill: "#fff !important",
                    color: "red !important",
                  },
                  "& .css-108ml8o-MuiSvgIcon-root-MuiStepIcon-root": {
                    color: "#616161 !important",
                  },
                  "& .css-108ml8o-MuiSvgIcon-root-MuiStepIcon-root.Mui-active":
                    {
                      color: "#000 !important",
                    },
                  "& .css-108ml8o-MuiSvgIcon-root-MuiStepIcon-root.Mui-completed":
                    {
                      color: "#000 !important",
                    },
                }}
              >
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </Box>
      {/* <Box
        component={"div"}
        sx={{
          width: "100% !important",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          alignContent: "center",
          flexDirection: "row",
        }}
      >
        <Box
          component={"div"}
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            alignContent: "center",
            width: "85%",
          }}
        >
          {StepNo !== 0 && (
            <Box
              component={"span"}
              // size="small"
              sx={{
                color: "#000",
                display: "flex",
                flexDirection: "row",
                alignContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
              // onClick={() => TimeScreenSwapper()}
              onClick={handleBack}
            >
              <KeyboardBackspaceIcon style={{ fontSize: "1.25rem" }} />
              <Box component={"p"} sx={{ paddingLeft: "5px" }}>
                Back
              </Box>
            </Box>
          )}
        </Box>
      </Box> */}
      {StepNo === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            {StepNo === 0 ? (
              <AreaView />
            ) : StepNo === 1 ? (
              <PlaceView />
            ) : StepNo === 2 ? (
              <DateTimeRangeView />
            ) : (
              <SlotsView />
            )}
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            {/* <Button onClick={handleNext}>
              {StepNo === steps.length - 1 ? "Confirm Booking" : "Next"}
            </Button> */}
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
