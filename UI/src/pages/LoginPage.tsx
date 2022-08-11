import React from "react";
import NavBar from "../components/Navbar/NavBar";
import Title from "../components/Title/Title";
import Login from "../components/AuthComponent/Login";
type Props = {};

const LoginPage = (props: Props) => {
  return (
    <>
      {/* <div>
      <NavBar /> */}
      <Title titleText="Log In" />
      <Login />
      {/* </div> */}
    </>
  );
};

export default LoginPage;
