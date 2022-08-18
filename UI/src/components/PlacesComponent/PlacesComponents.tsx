import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import "./style.css";
// import { GetTokenLocal } from "../../requestMethod";
import { useDispatch, useSelector } from "react-redux";
import { ChangeStep, ComponentChange, SelectedPlace } from "../../redux/action";
import Animation from "../SideAnimation/Animation";
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
    StepNo: Number;
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
  const [IsScreenSwap, setIsScreenSwap] = useState(false);
  const DetailsUser = useSelector((state: SelectorType) => state?.user);
  const { allPlaces, StepNo } = DetailsUser;
  const handlePlaceSubmit = (item: SelectedPlace) => {
    dispatch(SelectedPlace(item));
    console.log(item);
    console.log(StepNo);

    dispatch(ChangeStep(2));

    // dispatch(ComponentChange("DateTimeRangeView"));
  };
  // const SubmitRange = (value1: string, value2: string) => {
  // const start = new Date(value1).getTime();
  // const end = new Date(value2).getTime();
  //   const Duration = end - start;
  //   console.log("ranges", start, end);
  //   console.log("duration", Duration);
  // };
  return (
    <Main
      Data={allPlaces}
      handleSelect={handlePlaceSubmit}
      place={true}
      area={false}
    />

    // <div
    //   className="container"
    //   style={{ flexGrow: "1", display: "flex", width: "100%" }}
    // >
    //   <Box
    //     component="main"
    //     style={{
    //       display: "flex",
    //       flexDirection: "column",
    //       justifyContent: "center",
    //       alignContent: "center",
    //       alignItems: "center",
    //       width: "50%",
    //     }}
    //   >
    //     {allPlaces?.map((item, index) => {
    //       return (
    //         <Button
    //           variant="contained"
    //           className="button"
    //           color="secondary"
    //           fullWidth
    //           onClick={() => handlePlaceSubmit(item)}
    //         >
    //           <p> {item.placeName}</p>
    //           <ArrowForwardIosIcon style={{ fontSize: "1rem" }} />
    //         </Button>
    //       );
    //     })}
    //   </Box>
    //   <Animation />
    // </div>
  );
};

export default ParkingPlaces;
