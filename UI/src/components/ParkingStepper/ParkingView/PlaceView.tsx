import React from "react";
import ParkingPlaces from "../../PlacesComponent/PlacesComponents";
import Title from "../../Title/Title";

type Props = {};

const PlaceView = (props: Props) => {
  return (
    <>
      {/* <Title titleText="Available Places" /> */}
      <ParkingPlaces />
    </>
  );
};

export default PlaceView;
