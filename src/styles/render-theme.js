import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { CartContextProvider } from "../components/contexts/CartContext";
import { LayoutContextProvider } from "../components/contexts/LayoutContext";
import { theme } from "./theme";

export const renderTheme = (children) => {
  return render(
    <ThemeProvider theme={theme}>
      <LayoutContextProvider>
        <CartContextProvider>{children}</CartContextProvider>
      </LayoutContextProvider>
    </ThemeProvider>
  );
};
