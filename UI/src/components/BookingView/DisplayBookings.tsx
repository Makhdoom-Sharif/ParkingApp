import { Button, Paper } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

type Props = {};

const DisplayBookings = (props: Props) => {
  return (
    <Box
      sx={{
        p: "20px",
        border: "1px solid #dbdbdb",
      }}
    >
      {[1, 2, 3].map((item) => (
        <Box
          component={"div"}
          sx={{
            display: "flex",
            width: "100%",
            backgroundColor: "#fff",
            boxShadow: 2,
            mb: "20px",
          }}
        >
          <Box
            component={"div"}
            sx={{
              width: "20%",
              display: "flex",
              padding: "5px",
              color: "#616161",
              fontWeight: "600",
            }}
          >
            Place#1,Area#1:
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "80%",
            }}
          >
            <Box
              component={"div"}
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                padding: "5px",
                color: "#616161",
              }}
            >
              Your booking is scheduled on date1 time1 to date2 time2 at
              "Place,Area". Your Slot number is 1.
            </Box>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                component={"span"}
                color="error"
                sx={{
                  cursor: "pointer",
                  width: "fit-content",
                  margin: "15px",
                }}
              >
                {" "}
                Cancel
              </Button>
            </Box>
          </Box>
        </Box>
      ))}
      {/* <TableMain /> */}
      {/* </Paper> */}
    </Box>
  );
};

export default DisplayBookings;
