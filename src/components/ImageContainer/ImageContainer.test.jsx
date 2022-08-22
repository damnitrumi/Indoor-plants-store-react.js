import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";
import { ImageContainer } from ".";

describe("<ImageContainer />", () => {
  it("should render image", () => {
    renderTheme(<ImageContainer urlImg="a.svg" />);
    expect(screen.getByRole("img")).toHaveAttribute("src", "a.svg");
  });
});
