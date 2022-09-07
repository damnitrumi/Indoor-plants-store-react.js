import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";
import { About } from ".";

describe("<About />", () => {
  it("should render About component", () => {
    renderTheme(<About />);
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
});
