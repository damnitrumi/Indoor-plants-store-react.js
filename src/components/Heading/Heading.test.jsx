import { screen } from "@testing-library/react";
import { Heading } from ".";
import { renderTheme } from "../../styles/render-theme";

describe("Heading", () => {
  it("should render heading component", () => {
    renderTheme(<Heading>Heading</Heading>);
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
});
