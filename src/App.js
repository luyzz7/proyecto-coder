import React from "react";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import "./App.css";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

function App() {

  const theme = createTheme({
    typography: {
      fontFamily: [
        "Ubuntu",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "sans-serif"
      ].join(",")
    }
  });

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <NavBar/>
        <Routes>
          <Route
            path="/"
            element={
              <ItemListContainer/>
            }
          />
          <Route
            path="category/:id"
            element={
              <ItemListContainer/>
            }
          />
          <Route
            path="item/:id"
            element={
              <ItemDetailContainer/>
            }
          />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
