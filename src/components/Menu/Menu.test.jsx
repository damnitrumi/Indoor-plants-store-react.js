import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";
import { Menu } from ".";

describe("<Menu />", () => {
  it("should render Menu and its components", () => {
    renderTheme(<Menu />);
    expect(screen.getAllByRole("img")).toHaveLength(3);
  });

  it("should match snapshot", () => {
    const { container } = renderTheme(<Menu />);
    expect(container).toMatchSnapshot();
  });
});
