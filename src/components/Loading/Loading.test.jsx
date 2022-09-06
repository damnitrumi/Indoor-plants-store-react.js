import { screen } from "@testing-library/react";
import { Loading } from ".";
import { renderTheme } from "../../styles/render-theme";

describe("Loading", () => {
  it("should render Loading component", () => {
    renderTheme(<Loading />);
    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  it("should match snapshot", () => {
    const { container } = renderTheme(<Loading />);
    expect(container).toMatchSnapshot();
  });
});
