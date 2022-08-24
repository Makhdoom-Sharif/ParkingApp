import SpaIcon from "@mui/icons-material/Spa";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import MobileDrawer from "./Drawer/Drawer";
import Drawer from "./Drawer/Drawer";
import AccountMenu from "./DropDown";
type Props = {};
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

type locationProps = {
  pathname?: string;
};

export default function NavBar({}: Props) {
  const { loginStatus, username } = useSelector(
    (state: SelectorType) => state?.user
  );

  const itemStyle: object = {
    fontSize: { md: "15px", l: "20px", xl: "20px" },
    cursor: "pointer",
  };

  const itemSelectedStyle: object = {
    color: "#000",
    fontSize: { md: "15px", l: "20px", xl: "20px" },
    cursor: "pointer",
    textDecoration: "underline",
    webkitTextDecorationColor: "#72BE44",
    textDecorationColor: "#72BE44",
    textDecorationThickness: "5px",
    textUnderlineOffset: "5px",
  };

  const location: locationProps = useLocation();
  const path = location?.pathname;
  // console.log(path);
  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <MobileDrawer />
      <Box
        component={"h1"}
        sx={{
          display: "flex",
          flexGrow: "1",
          padding: "10px",
          alignContent: "center",
          alignItems: "center",
          fontSize: {
            xs: "1.5rem",
            sm: "1.5rem",
            md: "1.75rem",
            lg: "2rem",
            xl: "2rem",
          },
        }}
      >
        <SpaIcon sx={{ color: "#4056C8" }} />
        <Box component={"span"}>Park</Box>
        <Box component={"span"} sx={{ color: "#4056C8" }}>
          ea
        </Box>
      </Box>
      <Box
        sx={{
          display: "none",
          flexDirection: "row",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "space-between",
          width: "25%",
          padding: "10px",
          color: "#616161",
        }}
      >
        {loginStatus
          ? ["Park", "View Booking", "How It Works"].map((item, index) => {
              return (
                <>
                  <Link
                    to={
                      item === "Park"
                        ? "/Park"
                        : item === "View Booking"
                        ? "/ViewBooking"
                        : "/HowItWorks"
                    }
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <Box
                      component={"p"}
                      sx={
                        path == `/${item.replaceAll(" ", "")}`
                          ? itemSelectedStyle
                          : itemStyle
                      }
                      key={index}
                    >
                      {item}
                    </Box>
                  </Link>
                </>
              );
            })
          : ["Login", "Register"].map((item, index) => {
              return (
                <Link
                  to={item === "Login" ? "/Login" : "/Register"}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Box
                    // component={'p'}
                    sx={path == `/${item}` ? itemSelectedStyle : itemStyle}
                    key={index}
                  >
                    {item}
                  </Box>
                </Link>
              );
            })}
        {/* < Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <p>{username}</p> */}

        {/* <Drawer /> */}
      </Box>
      {loginStatus && <AccountMenu />}
    </Box>
  );
}
