import { Box } from "@mui/material";
import React from "react";

type Props = {};

const Animation = (props: Props) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
        flexWrap: "wrap",
        width: "50%",
      }}
    >
      <Box component={"img"} src="https://i.ibb.co/Tvyjm5B/carpark.png"></Box>
    </div>
  );
};

export default Animation;
