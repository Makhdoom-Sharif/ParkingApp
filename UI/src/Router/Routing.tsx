import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/Navbar/NavBar";
import HowItWorks from "../pages/HowItWorks";
import AuthPage from "../pages/AuthPage";
import ParkingSlotsMainPage from "../pages/ParkingSlotsMainPage";
import NewReservation from "../pages/NewReservation";
// import RegisterPage from "../pages/RegisterPage";
import ViewBookingPage from "../pages/ViewBookingPage";
import Home from "../pages/Home";
import AllUsersPage from "../pages/AllUsersPage";
import AllBookingsPage from "../pages/AllBookingsPage";
import AllParkingLots from "../pages/AllParkingLots";

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

const Routing = (props: Props) => {
  const { loginStatus, isAdmin } = useSelector(
    (state: SelectorType) => state?.user
  );
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <NavBar />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: isAdmin ? "flex-start" : "center",
          alignContent: "center",
          flexGrow: 1,
        }}
      >
        {loginStatus ? (
          isAdmin ? (
            <Routes>
              <Route path="/AllUsers" element={<AllUsersPage />}></Route>
              <Route path="/AllBookings" element={<AllBookingsPage />}></Route>
              <Route
                path="/AllParkingLots"
                element={<AllParkingLots />}
              ></Route>
              <Route path="*" element={<Navigate replace to="/AllUsers" />} />
            </Routes>
          ) : (
            <Routes>
              <Route path="/Home" element={<Home />}></Route>
              <Route
                path="/NewReservation"
                element={<NewReservation />}
              ></Route>
              <Route path="/ViewBooking" element={<ViewBookingPage />}></Route>
              <Route path="/HowItWorks" element={<HowItWorks />}></Route>
              <Route path="*" element={<Navigate replace to="/Home" />} />
            </Routes>
          )
        ) : (
          <Routes>
            <Route path="/Login" element={<AuthPage />}></Route>
            <Route path="*" element={<Navigate replace to="/Login" />} />
          </Routes>
        )}
      </Box>
      <Footer />
    </div>
  );
};

export default Routing;
