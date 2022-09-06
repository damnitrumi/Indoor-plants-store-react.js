import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";
import { Text } from "../Text/index";

describe("Text", () => {
  it("should render Text component", () => {
    renderTheme(<Text>{`<h1>Test</h1>`}</Text>);
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
});
