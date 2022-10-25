import React from "react";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import "./App.css";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import CartContextProvider from "./context/cartContext";

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
    <CartContextProvider>
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
            <Route
              path="cart"
              element={
                <Cart/>
              }
            />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
