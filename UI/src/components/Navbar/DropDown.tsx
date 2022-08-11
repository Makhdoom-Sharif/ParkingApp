import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { useDispatch, useSelector } from "react-redux";
import { logoutFail, logoutStart, logoutSuccess } from "../../redux/action";
import EditIcon from "@mui/icons-material/Edit";
type SelectorType = {
  user: {
    accessToken: string;
    contactNo: string;
    email: string;
    errorMessage: string;
    isAdmin: boolean;
    loading: boolean;
    loginStatus: boolean;
    uid: string;
    username: string;
  };
};
export default function AccountMenu() {
  const dispatch = useDispatch();
  const { loginStatus, username } = useSelector(
    (state: SelectorType) => state?.user
  );
  const LogOut = () => {
    dispatch(logoutStart());
    console.log("works");
    try {
      dispatch(logoutSuccess());
    } catch (e) {
      dispatch(logoutFail(e));
    }
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          flexDirection: "column",
          justifyContent: "center",
          width: "10%",
        }}
      >
        {/* <Typography sx={{ minWidth: 100 }}>Contact</Typography> */}
        {/* <div
          style={{
            flexGrow: 1,
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        > */}
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2, mr: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ width: 40, height: 40 }}>M</Avatar>
          </IconButton>
        </Tooltip>

        {/* <Typography sx={{ minWidth: 100 }}>{username}</Typography> */}
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
          <Avatar sx={{ width: "70px !important", height: "70px !important" }}>
            M
          </Avatar>
          <p style={{ wordBreak: "break-all" }}>{username}</p>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <EditIcon fontSize="small" />
          </ListItemIcon>
          Change Profile Picture
        </MenuItem>
        <Divider />

        {/* <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem> */}
        <MenuItem onClick={() => LogOut()}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
