import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import PendingBooking from "../BookingView/PendingBooking";
import History from "../BookingView/History";

export default function TabNavigation() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box
          sx={{
            // borderBottom: 1,
            // borderColor: "divider",
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
                color: "#000",
              },
              ".css-1gt4i3f-MuiButtonBase-root-MuiTab-root": {
                fontSize: "40px",
                textTransform: "none",
              },
              backgroundColor: "#72BE44",
              width: "100%",
              height: "60px",
              // fontSize: "40px",

              // color: "#fff",
            }}
            // textColor="#000"
          >
            <Tab
              label="Pending Booking"
              value="1"
              // color="primary"
              sx={{ width: "50%", minWidth: "50%", maxWidth: "50%" }}
            />
            <Tab
              label="History"
              value="2"
              // color="secondary"
              sx={{ width: "50%", minWidth: "50%", maxWidth: "50%" }}
            />
          </TabList>
        </Box>
        <TabPanel value="1">
          <PendingBooking />
        </TabPanel>
        <TabPanel value="2">
          <History />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
