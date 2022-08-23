import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
// export type AlertColor = "success" | "info" | "warning" | "error";

type props = {
  //   handleClick: Function;
  open: boolean;
  handleClose: Function;
  severity: "success" | "info" | "warning" | "error";
  AlertMessage: string;
};

export default function SnackBar(props: props) {
  const { open, handleClose, severity, AlertMessage } = props;
  //   const [open, setOpen] = React.useState(false);

  //   const handleClick = () => {
  //     setOpen(true);
  //   };

  //   const handleClose = (
  //     event?: React.SyntheticEvent | Event,
  //     reason?: string
  //   ) => {
  //     if (reason === "clickaway") {
  //       return;
  //     }

  //     setOpen(false);
  //   };

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      {/* <Button variant="outlined" onClick={() => handleClick()}>
        Open success snackbar
      </Button> */}
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        autoHideDuration={3000}
        onClose={() => handleClose()}
      >
        <Alert
          onClose={() => handleClose()}
          severity={severity}
          sx={{ width: "100%" }}
        >
          {AlertMessage}
        </Alert>
      </Snackbar>
      {/* <Alert severity="error">This is an error message!</Alert>
      <Alert severity="warning">This is a warning message!</Alert>
      <Alert severity="info">This is an information message!</Alert>
      <Alert severity="success">This is a success message!</Alert> */}
    </Stack>
  );
}
