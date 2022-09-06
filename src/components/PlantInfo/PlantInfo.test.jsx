import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";
import { PlantInfo } from ".";
import plantsMock from "../utils/plantsMock";
import userEvent from "@testing-library/user-event";

describe("<PlantInfo />", () => {
  it("should render PlantInfo", () => {
    renderTheme(<PlantInfo plant={plantsMock[0]} />);

    const firstHeading = screen.getByRole("heading", { name: "Cacto Plant 1" });
    const secondHeading = screen.getByRole("heading", {
      name: "R$ 21.00",
    });
    const headings = screen.getAllByRole("heading");

    expect(firstHeading).toBeInTheDocument();
    expect(secondHeading).toBeInTheDocument();
    expect(headings).toHaveLength(2);
  });

  it("should render the correct tab", () => {
    renderTheme(<PlantInfo plant={plantsMock[0]} />);

    const buttons = screen.getAllByRole("button");

    userEvent.click(buttons[1]);

    const reviews = screen.getByText(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lobortis aliquam elit. Vestibulum eget metus 1"
    );

    expect(reviews).toBeInTheDocument();
  });

  it("should render", () => {
    const { container } = renderTheme(<PlantInfo plant={plantsMock[0]} />);

    expect(container).toMatchSnapshot();
  });
});
