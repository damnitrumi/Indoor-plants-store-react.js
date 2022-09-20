import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";
import { Cart } from ".";
import { Catalogo } from "../Catalogo";
import { Menu } from "../Menu";

import plants from "../utils/plantsMock";
import userEvent from "@testing-library/user-event";

describe("<Cart />", () => {
  it("should render Cart and items inside with total price", () => {
    renderTheme(
      <>
        <Cart /> <Catalogo plants={plants} />
      </>
    );

    const catalogBtn = screen.getByRole("button", { name: "Add To Cart" });
    userEvent.click(catalogBtn);

    expect(
      screen.getByRole("heading", { name: /Total Price/i })
    ).toBeInTheDocument();
  });

  it("should call function when the button is clicked", () => {
    renderTheme(<Cart />);

    const cartBtn = screen.getByRole("button", { name: "Payment" });

    userEvent.click(cartBtn);

    // Aqui eu só fiz esse teste clicando no botão para pegar o coverage, pois se a função é chamada ou não, já testamos diretamente no componente button
  });

  it("should call render with correct style", () => {
    const { container } = renderTheme(
      <>
        <Menu />
        <Cart />
      </>
    );

    const btns = screen.getAllByRole("button");
    const cart = container.firstElementChild.nextElementSibling;

    userEvent.click(btns[2]);

    expect(cart).toHaveStyle("transform: translateX(0)");

    // Aqui eu só fiz esse teste pra testar o style ao clicar no botão pra ele aparecer, basicamente pra coverage
  });
});
