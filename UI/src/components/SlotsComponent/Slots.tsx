import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
// import "./style.css";
// import { GetTokenLocal } from "../../requestMethod";
import { useDispatch, useSelector } from "react-redux";
import { ChangeStep, ComponentChange } from "../../redux/action";
import Main from "../Cards/Main";
import ModalDisplay from "../Modal/Modal";
import Animation from "../SideAnimation/Animation";

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
    allSlots: {
      _id: string;
      SlotNo: string;
      parkingPlaceID: String;
    }[];
  };
};

const Slots = (props: Props) => {
  const dispatch = useDispatch();
  const [IsScreenSwap, setIsScreenSwap] = useState(false);
  const DetailsUser = useSelector((state: SelectorType) => state?.user);
  const { allSlots } = DetailsUser;
  const handlePlaceSubmit = (item: String) => {
    // dispatch(ComponentChange("DateTimeRangeView"));
    console.log(item);
    dispatch(ChangeStep(4));
  };
  return (
    // <Main
    //   Data={allSlots}
    //   handleSelect={handlePlaceSubmit}
    //   area={false}
    //   place={false}
    // />

    <ModalDisplay />
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
    //     {allSlots?.map((item, index) => {
    //       return (
    //         <Button
    //           variant="contained"
    //           className="button"
    //           color="secondary"
    //           fullWidth
    //           onClick={() => handlePlaceSubmit(item._id)}
    //         >
    //           <p> {item.SlotNo}</p>
    //           <ArrowForwardIosIcon style={{ fontSize: "1rem" }} />
    //         </Button>
    //       );
    //     })}
    //   </Box>
    //   <Animation />
    // </div>
  );
};

export default Slots;
