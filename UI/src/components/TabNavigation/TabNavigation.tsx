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
import "./style.css";
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
  };
};
export default function TabNavigation() {
  const [value, setValue] = React.useState("1");
  const { loading, accessToken, uid } = useSelector(
    (state: SelectorType) => state?.user
  );
  const dispatch = useDispatch();
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const GetBookingData = async () => {
    if (value === "1") {
      const Data = {
        AccessTOKEN: accessToken,
        qCategory: "pending",
        userID: uid,
        dispatch,
      };
      await GetUserBookings(Data);
      console.log("PendingBooking");
    } else {
      const Data = {
        AccessTOKEN: accessToken,
        qCategory: "history",
        userID: uid,
        dispatch,
      };
      await GetUserBookings(Data);
      console.log("History");
    }
  };
  React.useEffect(() => {
    GetBookingData();
  }, [value]);
  return (
    <Box className="BookingContainer" sx={{ typography: "body1" }}>
      <Box className="BookingConatinerFade">
        <TabContext value={value}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              ".css-1yssfoi-MuiTabs-root": {
                alignItems: "center",
              },
            }}
          >
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              sx={{
                ".css-1gt4i3f-MuiButtonBase-root-MuiTab-root.Mui-selected": {
                  color: "#fff",
                },
                ".css-a4gntu-MuiTabs-indicator": {
                  backgroundColor: "#fff",
                },
                ".css-1gt4i3f-MuiButtonBase-root-MuiTab-root": {
                  fontSize: "40px",
                  textTransform: "none",
                  color: "#ffffff4f",
                },
                backgroundColor: "#1A1A1A",
                width: "100%",
                height: "60px",
              }}
            >
              <Tab
                label="Pending Booking"
                value="1"
                sx={{ width: "50%", minWidth: "50%", maxWidth: "50%" }}
              />
              <Tab
                label="History"
                value="2"
                sx={{ width: "50%", minWidth: "50%", maxWidth: "50%" }}
              />
            </TabList>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <TabPanel value="1" sx={{ width: "70%", minHeight: "70vh" }}>
              <PendingBooking />
            </TabPanel>
            <TabPanel value="2" sx={{ width: "70%", minHeight: "70vh" }}>
              <History />
            </TabPanel>
          </Box>
        </TabContext>
      </Box>
    </Box>
  );
}
