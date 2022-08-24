import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import PendingBooking from "../BookingView/PendingBooking";
import History from "../BookingView/History";
import { GetUserBookings } from "../../apiCalls";
import { useDispatch, useSelector } from "react-redux";
import Login from "../AuthComponent/Login";
import SignUp from "../AuthComponent/SignUp";

// type SelectorType = {
//   user: {
//     accessToken: string;
//     contactNo: string;
//     email: string;
//     errorMessage: string;
//     isAdmin: boolean;
//     loading: boolean;
//     loginStatus: boolean;
//     uid: string;
//     username: string;
//   };
// };
type props = {};
export default function AuthNavigation(props: props) {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <TabContext value={value}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <TabList
          onChange={handleChange}
          aria-label="lab API tabs example"
          sx={{
            width: "40%",
            height: "60px",
            ".css-1gt4i3f-MuiButtonBase-root-MuiTab-root.Mui-selected": {
              color: "#000",
            },
          }}
        >
          <Tab
            label="Login"
            value="1"
            sx={{ width: "50%", minWidth: "50%", maxWidth: "50%" }}
          />
          <Tab
            label="SignUp"
            value="2"
            sx={{ width: "50%", minWidth: "50%", maxWidth: "50%" }}
          />
        </TabList>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexGrow: 1,
          width: "100% !important",
        }}
      >
        <TabPanel value="1" sx={{ width: "100% !important" }}>
          <Login />
        </TabPanel>
        <TabPanel value="2" sx={{ width: "100% !important" }}>
          <SignUp />
        </TabPanel>
      </Box>
    </TabContext>
    // </Box>
  );
}
