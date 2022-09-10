import React from "react";
import ReactDOM from "react-dom/client";

import { ThemeProvider } from "styled-components";
import { LayoutContextProvider } from "./components/contexts/LayoutContext";
import { CartContextProvider } from "./components/contexts/CartContext";
import { GlobalStyles } from "./styles/global-styles";
import { theme } from "./styles/theme";
import { Home } from "./templates/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <LayoutContextProvider>
        <CartContextProvider>
          <Home />
          <GlobalStyles />
        </CartContextProvider>
      </LayoutContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
