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
import "./Style.css";

const style = {
  position: "absolute",
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

  function convertToDays(milliSeconds: number) {
    let days = Math.floor(milliSeconds / (86400 * 1000));
    milliSeconds -= days * (86400 * 1000);
    let hours = Math.floor(milliSeconds / (60 * 60 * 1000));
    milliSeconds -= hours * (60 * 60 * 1000);
    let minutes = Math.floor(milliSeconds / (60 * 1000));
    return {
      days,
      hours,
      minutes,
    };
  }

  const Duration = convertToDays(
    BookingData && BookingData.end && BookingData?.start
      ? BookingData.end - BookingData.start
      : 0
  );

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
          <Box className="ModalContainer">
            <Box className="ModalCloseIcon ">
              <IconButton sx={{ color: "#FF0000" }} onClick={handleClose}>
                <CancelIcon sx={{ fontSize: "2rem" }} />
              </IconButton>
            </Box>
            <Box component={"div"} className="ModalHeading">
              BOOKING CONFIRMATION
            </Box>
            <br />
            <Divider />
            <Box component={"div"} className="ModalRowContainer">
              <Box component={"div"} className="ModalRowHeading">
                {" "}
                Area:
              </Box>
              <Box component={"div"} className="ModalRowData">
                {BookingData?.AreaName}
              </Box>
            </Box>
            <Divider />
            <Box component={"div"} className="ModalRowContainer">
              <Box component={"div"} className="ModalRowHeading">
                {" "}
                Place Name:
              </Box>
              <Box component={"div"} className="ModalRowData">
                {BookingData?.placeName}
              </Box>
            </Box>
            <Divider />
            <Box component={"div"} className="ModalRowContainer">
              <Box component={"div"} className="ModalRowHeading">
                {" "}
                Slot No:
              </Box>
              <Box component={"div"} className="ModalRowData">
                {BookingData?.slotNo}
              </Box>
            </Box>
            <Divider />
            <Box component={"div"} className="ModalRowContainer">
              <Box component={"div"} className="ModalRowHeading">
                {" "}
                Date And Time Range:
              </Box>
            </Box>
            <Box component={"div"} className="ModalTimeRangeContainer">
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
              className="ModalTimeRangeDuration"
            >
              <Box component={"div"} sx={{ display: "flex", color: "#000" }}>
                Duration :
              </Box>
              <Box
                sx={{ paddingLeft: "5px", color: "#616161" }}
              >{` ${Duration.days} days ${Duration.hours} hours and ${Duration.minutes} minutes`}</Box>
            </Box>
            <Divider />
            <DialogActions className="ModalDialogAction">
              <Box component={"div"} className="ModalButtonContainer">
                <Box
                  component={"span"}
                  sx={{
                    borderRight: "1px solid rgba(0, 0, 0, 0.12)",
                    color: "#4056C8",
                    justifyContent: "flex-start",
                  }}
                  className="ModalButton"
                  onClick={handleSubmit}
                >
                  Confrim
                </Box>
                <Box
                  component={"span"}
                  sx={{
                    color: "#FF0000",
                    justifyContent: "flex-end",
                  }}
                  className="ModalButton"
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
