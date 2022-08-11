import React from "react";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/Navbar/NavBar";
import ParkingPlaces from "../components/ParkingMap/ParkingMap";
// import ParkingMap from "../components/ParkingMap/ParkingMap";
import Title from "../components/Title/Title";

type Props = {};

const ParkPage = (props: Props) => {
  return (
    <>
      {/* // <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        //     <NavBar /> */}
      <div style={{ flexGrow: "1", display: "flex", flexDirection: "column" }}>
        <Title titleText="Park Your Vehicle" />
        <ParkingPlaces />
      </div>
      <Footer />
      {/* // </div> */}
    </>
  );
};

export default ParkPage;
