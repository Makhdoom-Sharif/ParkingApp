import { LoadingButton } from "@mui/lab";
import { Button, Paper } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteUserBooking } from "../../apiCalls";
import SnackBar from "../SnackBar/SnackBar";

type Props = {
  Data?: {
    _id?: string;
    userID?: string;
    from?: number;
    to?: number;
    slotNo?: string;
    slotID?: string;
    AreaName?: string;
    placeName?: string;
  }[];
};
type item = {
  _id?: string;
  userID?: string;
  from?: number;
  to?: number;
  slotNo?: string;
  slotID?: string;
  AreaName?: string;
  placeName?: string;
};
type SelectorType = {
  user: {
    uid: string;
    accessToken: string;
  };
};
const DisplayBookings = (props: Props) => {
  const [loading, SetLoading] = useState(false);
  const [open, SetOpen] = useState(false);
  const [severity, SetSeverity] = useState<
    "success" | "info" | "warning" | "error"
  >("success");
  const [AlertMessage, setAlertMessage] = useState("");
  const handleClose = () => {
    SetOpen(false);
  };
  const { uid, accessToken } = useSelector(
    (state: SelectorType) => state?.user
  );
  const dispatch = useDispatch();
  const handleCancel = async (item: item) => {
    SetLoading(true);
    try {
      const Data = await DeleteUserBooking({
        _id: item._id,
        uid,
        dispatch,
        AccessTOKEN: accessToken,
      });
      setAlertMessage(Data.data);

      SetSeverity("success");
      SetOpen(true);
      SetLoading(false);
      // console.log(Data);
    } catch (e: any) {
      SetSeverity("error");
      setAlertMessage(e.response.data);
      SetOpen(true);
      SetLoading(false);

      // console.log(e.response.data);
    }
  };
  const { Data } = props;
  return (
    <Box
      sx={{
        p: "20px",
        border: "1px solid #dbdbdb",
      }}
    >
      <SnackBar
        open={open}
        handleClose={handleClose}
        severity={severity}
        AlertMessage={AlertMessage}
      />
      {Data &&
        Data.map((item) => (
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
              {`${item.placeName},${item.AreaName}`}:
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
                <>
                  Your booking is scheduled on{" "}
                  {"Date: " +
                    new Date(item?.from ? item.from : 0).getDate() +
                    "/" +
                    (new Date(item?.from ? item.from : 0).getMonth() + 1) +
                    "/" +
                    new Date(item?.from ? item.from : 0).getFullYear() +
                    " " +
                    new Date(item?.from ? item.from : 0).getHours() +
                    ":" +
                    new Date(item?.from ? item.from : 0).getMinutes() +
                    ":" +
                    new Date(item?.from ? item.from : 0).getSeconds()}{" "}
                  to{" "}
                  {"Date: " +
                    new Date(item?.to ? item.to : 0).getDate() +
                    "/" +
                    (new Date(item?.to ? item.to : 0).getMonth() + 1) +
                    "/" +
                    new Date(item?.to ? item.to : 0).getFullYear() +
                    " " +
                    new Date(item?.to ? item.to : 0).getHours() +
                    ":" +
                    new Date(item?.to ? item.to : 0).getMinutes() +
                    ":" +
                    new Date(item?.to ? item.to : 0).getSeconds()}{" "}
                  at{" "}
                  {`'${item.placeName},${item.AreaName}'. Your Slot number
                  is ${item.slotNo}`}
                  .
                </>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <LoadingButton
                  loading={loading}
                  component={"span"}
                  color="error"
                  sx={{
                    cursor: "pointer",
                    width: "fit-content",
                    margin: "15px",
                  }}
                  onClick={() => handleCancel(item)}
                >
                  {" "}
                  Cancel
                </LoadingButton>
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
