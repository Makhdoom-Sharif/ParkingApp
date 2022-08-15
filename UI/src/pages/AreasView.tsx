import React from "react";
import Cards from "../components/AreaCards/Cards";
import Footer from "../components/Footer/Footer";
import Title from "../components/Title/Title";

type Props = {};

const AreasView = (props: Props) => {
  return (
    <>
      <div style={{ flexGrow: "1", display: "flex", flexDirection: "column" }}>
        <Title titleText="Park" />
        <Cards />
      </div>
      <Footer />;
    </>
  );
};

export default AreasView;
