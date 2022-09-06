import { renderTheme } from "../../styles/render-theme";
import { Dots } from ".";
import { theme } from "../../styles/theme";

describe("<Dots />", () => {
  it("should render Dots", () => {
    const { container } = renderTheme(<Dots current={1} index={1} />);
    const dot = container.firstChild;
    expect(dot).toBeInTheDocument();
  });

  it("should render with grey bg", () => {
    const { container } = renderTheme(<Dots current={1} index={1} />);
    const dot = container.firstChild;
    expect(dot).toHaveStyle(`background-color: ${theme.colors.grey}`);
  });

  it("should render with mediumgrey bg", () => {
    const { container } = renderTheme(<Dots dark current={1} index={2} />);
    const dot = container.firstChild;
    expect(dot).toHaveStyle(`background-color: ${theme.colors.mediumGrey}`);
  });
});
