import MenuIcon from "@mui/icons-material/Menu";
import { Divider } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import Footer from "../../Footer/Footer";
import HomeIcon from "@mui/icons-material/Home";
import NoCrashIcon from "@mui/icons-material/NoCrash";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import "../Style.css";
type Anchor = "left";
export default function MobileDrawer() {
  const { pathname } = useLocation();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Home", "New Reservation", "View Booking"].map((text, index) => (
          <Link
            to={
              text === "New Reservation"
                ? "/NewReservation"
                : text === "View Booking"
                ? "/ViewBooking"
                : "/Home"
            }
            style={{ textDecoration: "none" }}
          >
            <ListItem key={text} disablePadding>
              <ListItemButton>
                {text === "Home" ? (
                  <HomeIcon
                    sx={{
                      color:
                        `/${text}`.replace(/\s+/g, "") === pathname
                          ? "#fff"
                          : "#ffffff4f",
                      fontSize: "1.5rem",
                      textDecoration: "none",
                      paddingRight: "5px",
                    }}
                  />
                ) : text === "New Reservation" ? (
                  <NoCrashIcon
                    sx={{
                      color:
                        `/${text}`.replace(/\s+/g, "") === pathname
                          ? "#fff"
                          : "#ffffff4f",
                      fontSize: "1.5rem",
                      textDecoration: "none",
                      paddingRight: "5px",
                    }}
                  />
                ) : (
                  <BookOnlineIcon
                    sx={{
                      color:
                        `/${text}`.replace(/\s+/g, "") === pathname
                          ? "#fff"
                          : "#ffffff4f",
                      fontSize: "1.5rem",
                      textDecoration: "none",
                      paddingRight: "5px",
                    }}
                  />
                )}
                <ListItemText
                  primary={text}
                  sx={{
                    "& .css-10hburv-MuiTypography-root": {
                      color:
                        `/${text}`.replace(/\s+/g, "") === pathname
                          ? "#fff"
                          : "#ffffff4f",
                      fontSize: "1.25rem",
                      fontWeight: 400,
                      textDecoration: "none",
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <Box className="NavDrawer">
      <React.Fragment key={"left"}>
        <Button onClick={toggleDrawer("left", true)}>
          <MenuIcon sx={{ fontSize: "2rem" }} />
        </Button>
        <Drawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}
          >
            <div style={{ flexGrow: "1" }}>{list("left")}</div>

            <Footer Drawer={true} />
          </div>
        </Drawer>
      </React.Fragment>
    </Box>
  );
}
