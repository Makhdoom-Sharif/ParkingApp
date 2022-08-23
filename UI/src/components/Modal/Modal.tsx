import CancelIcon from "@mui/icons-material/Cancel";
import { DialogActions, Divider, IconButton } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { PostNewBooking } from "../../apiCalls";
import { ChangeStep, ConfirmationModal } from "../../redux/action";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  p: "20px",
  borderRadius: "10px",
  pt: "2px",
  pb: "2px",
  width: " 50%",
};
type SelectorType = {
  user: {
    ModalOpen: boolean;
    BookingData: {
      AreaID?: string;
      AreaName?: string;
      end?: number;
      parkingPlaceID?: string;
      placeName?: string;
      slotNo?: string;
      start?: number;
      totalSlots?: number;
      _id?: string;
    };
    accessToken: string;
    uid: string;
  };
};
export default function ModalDisplay() {
  const { BookingData, ModalOpen, accessToken, uid } = useSelector(
    (state: SelectorType) => state?.user
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClose = () => dispatch(ConfirmationModal(false));
  const handleSubmit = async () => {
    // console.log("first");
    try {
      await PostNewBooking({ ...BookingData, uid, accessToken }).then(() => {
        swal("Your booking has been regeistered!", {
          icon: "success",
        }).then(() => {
          navigate("/ViewBooking");
          dispatch(ConfirmationModal(false));
          dispatch(ChangeStep(0));
        });
      });
    } catch (e) {
      console.log(e);
    }
  };
  const Startdate = new Date(BookingData?.start ? BookingData.start : 0);
  const Start =
    "Date: " +
    Startdate.getDate() +
    "/" +
    (Startdate.getMonth() + 1) +
    "/" +
    Startdate.getFullYear() +
    " " +
    Startdate.getHours() +
    ":" +
    Startdate.getMinutes() +
    ":" +
    Startdate.getSeconds();
  const EndDate = new Date(BookingData?.end ? BookingData.end : 0);
  const End =
    "Date: " +
    EndDate.getDate() +
    "/" +
    (EndDate.getMonth() + 1) +
    "/" +
    EndDate.getFullYear() +
    " " +
    EndDate.getHours() +
    ":" +
    EndDate.getMinutes() +
    ":" +
    EndDate.getSeconds();
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={ModalOpen}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={ModalOpen}>
          <Box sx={style}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
                alignItems: "center",
                alignContent: "center",
                mr: "-20px !important",
              }}
            >
              <IconButton sx={{ color: "#FF0000" }} onClick={handleClose}>
                <CancelIcon sx={{ fontSize: "2rem" }} />
              </IconButton>
            </Box>
            <Box
              component={"div"}
              sx={{
                color: "#000",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                textDecoration: "underline",
                fontWeight: "600",
                fontSize: "1.75rem",
                textDecorationColor: "#72BE49",
                textDecorationThickness: "5px",
              }}
            >
              BOOKING CONFIRMATION
            </Box>
            <br />
            <Divider />
            <Box
              component={"div"}
              sx={{
                mt: 2,
                display: "flex",
                alignItems: "center",
                alignContent: "center",
                flexDirection: "row",
              }}
            >
              <Box
                component={"div"}
                sx={{
                  fontSize: "1.25rem",
                  fontWeight: "600",
                  color: "#000",
                  width: "50%",
                }}
              >
                {" "}
                Area:
              </Box>
              <Box
                component={"div"}
                sx={{
                  fontSize: "1.25rem",
                  fontWeight: "600",
                  color: "#616161",
                  wordBreak: "break-all",
                }}
              >
                {BookingData?.AreaName}
              </Box>
            </Box>
            <Divider />
            <Box
              component={"div"}
              sx={{
                mt: 2,
                display: "flex",
                alignItems: "center",
                alignContent: "center",
                flexDirection: "row",
              }}
            >
              <Box
                component={"div"}
                sx={{
                  fontSize: "1.25rem",
                  fontWeight: "600",
                  color: "#000",
                  width: "50%",
                }}
              >
                {" "}
                Place Name:
              </Box>
              <Box
                component={"div"}
                sx={{
                  // pl: "5%",
                  fontSize: "1.25rem",
                  fontWeight: "600",
                  color: "#616161",
                  wordBreak: "break-all",
                }}
              >
                {BookingData?.placeName}
              </Box>
            </Box>
            <Divider />
            <Box
              component={"div"}
              sx={{
                mt: 2,
                display: "flex",
                alignItems: "center",
                alignContent: "center",
                flexDirection: "row",
              }}
            >
              <Box
                component={"div"}
                sx={{
                  fontSize: "1.25rem",
                  fontWeight: "600",
                  color: "#000",
                  width: "50%",
                }}
              >
                {" "}
                Slot No:
              </Box>
              <Box
                component={"div"}
                sx={{
                  fontSize: "1.25rem",
                  fontWeight: "600",
                  color: "#616161",
                  wordBreak: "break-all",
                }}
              >
                {BookingData?.slotNo}
              </Box>
            </Box>
            <Divider />
            <Box
              component={"div"}
              sx={{
                mt: 2,
                display: "flex",
                alignItems: "center",
                alignContent: "center",
                flexDirection: "row",
              }}
            >
              <Box
                component={"div"}
                sx={{ fontSize: "1.25rem", fontWeight: "600", color: "#000" }}
              >
                {" "}
                Date And Time Range:
              </Box>
            </Box>
            <Box
              component={"div"}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignContent: "center",
                alignItems: "center",
                mt: 2,
              }}
            >
              <Box
                component={"div"}
                id="transition-modal-description"
                sx={{ display: "flex" }}
              >
                <Box component={"div"} sx={{ display: "flex", color: "#000" }}>
                  Start :
                </Box>
                <Box sx={{ paddingLeft: "5px", color: "#616161" }}>{Start}</Box>
              </Box>
              <Box
                component={"div"}
                id="transition-modal-description"
                sx={{ display: "flex" }}
              >
                <Box component={"div"} sx={{ display: "flex", color: "#000" }}>
                  End :
                </Box>
                <Box sx={{ paddingLeft: "5px", color: "#616161" }}>{End}</Box>
              </Box>
            </Box>
            <Box
              component={"div"}
              id="transition-modal-description"
              sx={{
                display: "flex",
                mt: 2,
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
                mb: 2,
              }}
            >
              <Box component={"div"} sx={{ display: "flex", color: "#000" }}>
                Duration :
              </Box>
              <Box sx={{ paddingLeft: "5px", color: "#616161" }}>
                {BookingData &&
                  BookingData.end &&
                  BookingData?.start &&
                  BookingData?.end - BookingData?.start}
              </Box>
            </Box>
            <Divider />
            <DialogActions
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
                p: 0,
              }}
            >
              <Box
                component={"div"}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  alignContent: "center",
                  width: "60%",
                  height: "50px",
                  // p: "0px !important",
                }}
              >
                <Box
                  component={"span"}
                  sx={{
                    borderRight: "1px solid rgba(0, 0, 0, 0.12)",
                    width: "50%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    color: "#72BE44",
                    cursor: "pointer",
                  }}
                  onClick={handleSubmit}
                >
                  Confrim
                </Box>
                <Box
                  component={"span"}
                  sx={{
                    width: "50%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    color: "#FF0000",
                    cursor: "pointer",
                  }}
                  onClick={handleClose}
                >
                  Cancel
                </Box>
              </Box>
            </DialogActions>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
function to(to: any, arg1: string) {
  throw new Error("Function not implemented.");
}
