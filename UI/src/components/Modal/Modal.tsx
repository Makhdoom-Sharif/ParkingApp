import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CancelIcon from "@mui/icons-material/Cancel";
import { DialogActions, Divider, IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { ConfirmationModal } from "../../redux/action";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: 400,
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
  };
};
// type props = {
//   handleModalDisplay: Function;
//   openModal: boolean;
// };
export default function ModalDisplay() {
  // const { openModal, handleModalDisplay } = props;
  const { ModalOpen } = useSelector((state: SelectorType) => state?.user);
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  const handleClose = () => dispatch(ConfirmationModal(false));
  var timestamp = 1607110465663;
  var date = new Date(timestamp);
  console.log(
    "Date: " +
      date.getDate() +
      "/" +
      (date.getMonth() + 1) +
      "/" +
      date.getFullYear() +
      " " +
      date.getHours() +
      ":" +
      date.getMinutes() +
      ":" +
      date.getSeconds()
  );
  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
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
                // backgroundColor: "red",
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
                // backgroundColor: "secondary.main",
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
                  // pl: "22%",
                  fontSize: "1.25rem",
                  fontWeight: "600",
                  color: "#616161",
                  wordBreak: "break-all",
                }}
              >
                ABC
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
                ABC
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
                  // pl: "15%",
                  fontSize: "1.25rem",
                  fontWeight: "600",
                  color: "#616161",
                  wordBreak: "break-all",
                }}
              >
                23
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
                <Box sx={{ paddingLeft: "5px", color: "#616161" }}>
                  234324324
                </Box>
              </Box>
              <Box
                component={"div"}
                id="transition-modal-description"
                sx={{ display: "flex" }}
              >
                <Box component={"div"} sx={{ display: "flex", color: "#000" }}>
                  End :
                </Box>
                <Box sx={{ paddingLeft: "5px", color: "#616161" }}>
                  234324324
                </Box>
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
              <Box sx={{ paddingLeft: "5px", color: "#616161" }}>234324324</Box>
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
                  // size="small"
                  // variant="contained"
                  // color="success"
                  sx={{
                    borderRight: "1px solid rgba(0, 0, 0, 0.12)",
                    width: "50%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    color: "#72BE44",
                    cursor: "pointer",
                  }}
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
