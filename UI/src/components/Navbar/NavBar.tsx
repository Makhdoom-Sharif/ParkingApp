import SpaIcon from "@mui/icons-material/Spa";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import MobileDrawer from "./Drawer/Drawer";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
// import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import Drawer from "./Drawer/Drawer";
import AccountMenu from "./DropDown";
import "./Style.css";
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
    webkitTextDecorationColor: "#4056C8",
    textDecorationColor: "#4056C8",
    textDecorationThickness: "5px",
    textUnderlineOffset: "5px",
  };

  const location: locationProps = useLocation();
  const path = location?.pathname;
  // console.log(path);
  return (
    <Box className="NavBarContainer ">
      <Box className="NavBarLeftContainer">
        {loginStatus && <MobileDrawer />}
        <Box component={"h1"} className="NavBarLogoContainer">
          <SpaIcon sx={{ color: "#4056C8" }} />
          <Box component={"span"}>Park</Box>
          <Box component={"span"} sx={{ color: "#4056C8" }}>
            ea
          </Box>
        </Box>
      </Box>
      <Box className="NavBarRight">
        <Box className="NavBarRightTopContainer">
          <Box className="NavBarContactInfoContainer ">
            <Box className="NavBarAdressContainer">
              <LocationOnOutlinedIcon sx={{ color: "#4056C8" }} />
              <Box sx={{ color: "#fff", fontSize: "0.75rem" }}>
                Computing Yard, Faiyaz Center, Shahrah-e-Faisal, Karachi
              </Box>
            </Box>
            <Box className="NavBarEmailContainer">
              <EmailOutlinedIcon sx={{ color: "#4056C8" }} />
              <Box sx={{ color: "#fff", fontSize: "0.75rem" }}>
                Support@ComputingYards.com
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Box className="NavBarSocialIcons ">
              <FacebookIcon />
            </Box>
            <Box className="NavBarSocialIcons ">
              <InstagramIcon />
            </Box>
            <Box className="NavBarSocialIcons ">
              <TwitterIcon />
            </Box>
          </Box>
        </Box>
        <Box className="NavBarRightBottomContainer">
          <Box className="NavBarTab">
            {loginStatus &&
              ["Home", "New Reservation", "View Booking"].map((item, index) => {
                return (
                  <>
                    <Link
                      to={
                        item === "New Reservation"
                          ? "/NewReservation"
                          : item === "View Booking"
                          ? "/ViewBooking"
                          : "/Home"
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
              })}
          </Box>
          {loginStatus && <AccountMenu />}
        </Box>
      </Box>
    </Box>
  );
}
