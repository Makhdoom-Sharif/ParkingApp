import { Box } from "@mui/system";
import React from "react";

type Props = {};

const NoDataFoundView = (props: Props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Box
        component={"img"}
        // sx={{ width: "40%", height: "60%" }}
        src="https://i.ibb.co/LhCWSpc/notFound.png"
      ></Box>
      <Box
        component={"div"}
        sx={{ color: "#CED9D9", fontSize: "4rem", fontWeight: "600" }}
      >
        No Data Found
      </Box>
      {/* <DisplayBookings /> */}
    </div>
  );
};

export default NoDataFoundView;
