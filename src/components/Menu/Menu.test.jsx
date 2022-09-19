import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";
import { Menu } from ".";
import { Catalogo } from "../Catalogo";

import plants from "../utils/plantsMock";
import { userEvent } from "@storybook/testing-library";

describe("<Menu />", () => {
  it("should render Menu and its components", () => {
    renderTheme(<Menu />);
    expect(screen.getAllByRole("img")).toHaveLength(3);
  });

  it("should render Menu and its components with pop up", () => {
    renderTheme(
      <>
        <Menu /> <Catalogo plants={plants} />
      </>
    );

    const catalogBtn = screen.getByRole("button", { name: "Add To Cart" });
    userEvent.click(catalogBtn);
    expect(screen.getAllByLabelText("ItemsQty")).toHaveLength(2);
  });

  it("should match snapshot", () => {
    const { container } = renderTheme(<Menu />);
    expect(container).toMatchSnapshot();
  });
});
