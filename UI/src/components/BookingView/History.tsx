import { Box } from "@mui/system";
import React from "react";
import DisplayBookings from "./DisplayBookings";

type Props = {};

const History = (props: Props) => {
  return (
    <div>
      <Box
        component={"img"}
        src="https://i.ibb.co/K02D7Gw/history-Not-Found.png"
      ></Box>
      {/* <DisplayBookings /> */}
    </div>
  );
};

export default History;
