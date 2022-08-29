import { LoadingButton } from "@mui/lab";
import { Box, Button, CircularProgress } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
type Props = {};

const Main = (props: Props) => {
  return (
    <Box className="homeContainer">
      <Box className="homeContainerFade">
        <Box className="homeMain">
          <Box className="homeCenter">
            <Box className="homeCenterHeading ">
              <div>Find Amazing Parking</div>
              <div>Space Near You</div>
            </Box>
            <Box className="homeCenterText ">
              <div>
                Guarantee your parking spot by booking in advance. Can’t make
                it?
              </div>
              <div>Cancellations are free</div>
            </Box>
            <Link to={"/NewReservation"} style={{ textDecoration: "none" }}>
              <LoadingButton
                variant="contained"
                sx={{ backgroundColor: "#4056C8 !important" }}
                color="secondary"
                loadingIndicator={
                  <CircularProgress style={{ color: "#fff" }} size={16} />
                }
              >
                Show Parking Spaces
              </LoadingButton>
            </Link>
          </Box>
        </Box>
        {/* Main */}
      </Box>
    </Box>
  );
};

export default Main;
