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
import Areas from "../AreaCards/Areas";
import RangePicker from "../DateTimeRange/RangePicker";
import ParkingPlaces from "../PlacesComponent/PlacesComponents";
import Slots from "../SlotsComponent/Slots";

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
  const displayStep: number = StepNo;
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());

  const isStepOptional = (step: number) => {
    return step === 1;
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleBack = () => {
    if (StepNo === 0) {
    } else {
      let x: number = StepNo;
      dispatch(ChangeStep(--x));
    }
  };

  const handleReset = () => {
    // setActiveStep(0);
  };

  return (
    <Box sx={{ width: "100%", marginTop: "15px" }}>
      <Box
        component={"div"}
        sx={{
          display: "flex",
          flexDirection: {
            xl: "row",
            l: "row",
            md: "row",
            sm: "row",
            xs: "column",
          },

          justifyContent: "center",
          alignItems: { sm: "center", xs: "flex-start" },
          alignContent: "center",
        }}
      >
        <Box
          component={"span"}
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
          onClick={handleBack}
        >
          <KeyboardBackspaceIcon
            sx={{
              fontSize: { sm: "1.25rem", xs: "1rem" },
            }}
          />
          <Box
            component={"p"}
            sx={{
              paddingLeft: "5px",
              fontSize: { sm: "1.25rem", xs: "1rem" },
            }}
          >
            Back
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            color: "#fff",
            backgroundColor: "#000",
            display: {
              l: "none",
              sm: "none",
              xs: "flex",
            },
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            height: "40px",
          }}
        >
          {`${displayStep + 1}/${steps.length} ${steps[StepNo]}`}
        </Box>
        <Stepper
          activeStep={StepNo}
          sx={{
            width: "80%",
            marginRight: "10%",
            display: {
              sm: "flex",
              xs: "none",
            },
          }}
        >
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
                    fontSize: "1.25rem",
                  },
                  "& .css-108ml8o-MuiSvgIcon-root-MuiStepIcon-root.Mui-active":
                    {
                      color: "#000 !important",
                      fontSize: "1.25rem",
                    },
                  "& .css-108ml8o-MuiSvgIcon-root-MuiStepIcon-root.Mui-completed":
                    {
                      color: "#000 !important",
                      fontSize: "1.25rem",
                    },
                  ".css-qivjh0-MuiStepLabel-label": {
                    fontSize: "0.875rem",
                  },
                }}
              >
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </Box>

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
              <Areas />
            ) : StepNo === 1 ? (
              <ParkingPlaces />
            ) : StepNo === 2 ? (
              <RangePicker />
            ) : (
              <Slots />
            )}
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
