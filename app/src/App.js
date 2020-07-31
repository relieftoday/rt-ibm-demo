import React from 'react';
import './App.scss';
import {BrowserRouter, Route} from "react-router-dom";
import Routes from './Routes';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { blue } from '@material-ui/core/colors';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[500]
      // darker red: #C60813
      // lighter red: #E50B18
      // main blue: #4E99E3
      // light blue: #89bff4
    },
    secondary: {
      main: "#E50B18",
      dark: "#C60813",
      light: '#FC0D1B'
    },
  },
  typography: {
    fontFamily: ['proxima-nova', '"Helvetica Neue"', 'sans-serif'].join(','),
    fontSize: 13
  },
  custom: {
    color: "#9e9e9e"
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className="App">
          <Route>{Routes}</Route>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
