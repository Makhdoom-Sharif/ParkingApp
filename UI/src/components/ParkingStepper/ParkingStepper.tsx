import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AreaView from "./ParkingView/AreaView";
import PlaceView from "./ParkingView/PlaceView";
import DateTimeRangeView from "./ParkingView/DateTimeRangeView";
import SlotsView from "./ParkingView/SlotsView";
import { IconButton } from "@mui/material";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
const steps = [
  "Select Area",
  "Select Place",
  "Select Date & Time Range",
  "Select Slot no.",
];

export default function ParkingStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());

  const isStepOptional = (step: number) => {
    return step === 1;
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: "100%", marginTop: "15px" }}>
      <Stepper activeStep={activeStep}>
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
                "& .css-108ml8o-MuiSvgIcon-root-MuiStepIcon-root.Mui-active": {
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
      <Box
        component={"div"}
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        {activeStep + 1 !== 1 && (
          <Button
            size="small"
            style={{ color: "#000" }}
            // onClick={() => TimeScreenSwapper()}
            onClick={handleBack}
          >
            <KeyboardBackspaceIcon style={{ fontSize: "1.25rem" }} />
            <Box component={"p"} sx={{ paddingLeft: "5px" }}>
              Back
            </Box>
          </Button>
        )}
      </Box>
      {activeStep === steps.length ? (
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
            {activeStep + 1 === 1 ? (
              <AreaView />
            ) : activeStep + 1 === 2 ? (
              <PlaceView />
            ) : activeStep + 1 === 2 ? (
              <DateTimeRangeView />
            ) : (
              <SlotsView />
            )}
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Confirm Booking" : "Next"}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
