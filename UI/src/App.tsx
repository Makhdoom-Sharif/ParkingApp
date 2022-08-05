import React from 'react';
import logo from './logo.svg';
import './App.css';
import Routing from './Router/Routing';
import { ThemeProvider, createTheme } from "@mui/material/styles";

function App() {


  const theme = createTheme({
    palette: {
      primary: {
        main: '#616161',
        contrastText: '#72BE44',
      },
      secondary: {
        main: '#72BE44',
        contrastText: '#fff',
      }
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
