import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Routing from "./Router/Routing";
import { ThemeProvider, createTheme } from "@mui/material/styles";
// import { CallT, GetTokenLocal } from "./requestMethod";
// import { useSelector } from "react-redux";
// type SelectorType = {
//   user: {
//     accessToken: string;
//     contactNo: string;
//     email: string;
//     errorMessage: string;
//     isAdmin: boolean;
//     loading: boolean;
//     loginStatus: boolean;
//     uid: string;
//     username: string;
//     allPlaces: {
//       _id: string;
//       placeName: string;
//     }[];
//   };
// };
function App() {
  // const DetailsUser = useSelector((state: SelectorType) => state?.user);
  // const { loginStatus, accessToken } = DetailsUser;
  // useEffect(() => {
  //   GetTokenLocal(accessToken);
  //   CallT();
  //   console.log("first", accessToken);
  // }, [accessToken]);

  const theme = createTheme({
    palette: {
      primary: {
        main: "#616161",
        contrastText: "#72BE44",
      },
      secondary: {
        main: "#72BE44",
        contrastText: "#fff",
      },
      success: {
        main: "#000",
      },
      // ...
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Routing />
      </div>
    </ThemeProvider>
  );
}

export default App;
