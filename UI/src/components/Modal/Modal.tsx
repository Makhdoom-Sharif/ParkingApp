import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CancelIcon from "@mui/icons-material/Cancel";
import { IconButton } from "@mui/material";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  p: "20px",
  borderRadius: "10px",
  pt: "2px",
  // marginRight: "-20px !important",
};

export default function ModalDisplay() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
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
              <IconButton color="success" onClick={handleClose}>
                <CancelIcon sx={{ fontSize: "2rem" }} />
              </IconButton>
            </Box>
            <Typography
              id="transition-modal-title"
              variant="h5"
              component="h2"
              sx={{
                // backgroundColor: "secondary.main",
                color: "#000",
                // height: "60px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              BOOKING CONFIRMATION
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Area: ABC
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Place Name: ABCD
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Slot No: 1
            </Typography>
            <Typography
              id="transition-modal-description"
              sx={{ mt: 2, wordBreak: "break-all" }}
              variant="h6"
            >
              Date And Time Range:
            </Typography>
            <Box
              component={"div"}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                component={"p"}
                id="transition-modal-description"
                sx={{ mt: 2 }}
              >
                Start:2432432432
              </Box>
              <Box
                component={"p"}
                id="transition-modal-description"
                sx={{ mt: 2 }}
              >
                End: 234234324
              </Box>
            </Box>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Duration: 4324234
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
