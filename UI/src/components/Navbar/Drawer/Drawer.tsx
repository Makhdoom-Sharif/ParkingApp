import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";
import "../Style.css";
type Anchor = "left";
export default function MobileDrawer() {
  const [state, setState] = React.useState({
    // top: false,
    // left: false,
    // bottom: false,
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
        {["Park", "View Booking", "How It Works"].map((text, index) => (
          <Link
            to={
              text === "Park"
                ? "/Park"
                : text === "View Booking"
                ? "/ViewBooking"
                : "/HowItWorks"
            }
            style={{ textDecoration: "none" }}
          >
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText
                  primary={text}
                  sx={{
                    "& .css-10hburv-MuiTypography-root": {
                      color: "#fff",
                      fontSize: "1.5rem",
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
    <Box
      // sx={{

      //   // display: { md: "none", xs: "none" },
      //   flexDirection: "row",
      //   alignItems: "center",
      //   justifyContent: "center",
      //   alignContent: "center",
      // }}
      className="NavDrawer"
    >
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
              background: "#72BE44",
            }}
          >
            <div style={{ flexGrow: "1" }}>{list("left")}</div>

            <Footer />
          </div>
        </Drawer>
      </React.Fragment>
    </Box>
  );
}
