import React from "react";
import SignUp from "../components/AuthComponent/SignUp";
import NavBar from "../components/Navbar/NavBar";
import Title from "../components/Title/Title";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      {/* <div>
      <NavBar /> */}
      <Title titleText="Sign Up" />
      <SignUp />
      {/* </div> */}
    </>
  );
};

export default Home;
