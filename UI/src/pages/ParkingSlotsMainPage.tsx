import React from "react";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/Navbar/NavBar";
import ParkingMap from "../components/ParkingMap/ParkingMap";
import ParkingSlotsMain from "../components/ParkingSlotsMain/ParkingSlotsMain";
import Title from "../components/Title/Title";

type Props = {};

const ParkingSlotsMainPage = (props: Props) => {
  return (
    <>
      {/* <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <NavBar /> */}
      <div style={{ flexGrow: "1" }}>
        <Title titleText="Park Your Vehicle" />
        <ParkingSlotsMain />
      </div>
      <Footer />
      {/* </div> */}
    </>
  );
};

export default ParkingSlotsMainPage;
