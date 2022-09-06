import { Button } from "./index";
import { renderTheme } from "../../styles/render-theme";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Button", () => {
  it("should render Button", () => {
    const fn = jest.fn();
    renderTheme(<Button onClick={fn}>Click Here</Button>);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should call function when clicked", () => {
    const fn = jest.fn();
    renderTheme(<Button onClick={fn}>Click Here</Button>);
    const button = screen.getByRole("button");
    userEvent.click(button);
    expect(fn).toHaveBeenCalledTimes(1);
  });
});
