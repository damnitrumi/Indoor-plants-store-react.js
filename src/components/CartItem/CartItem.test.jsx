import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";
import { CartItem } from ".";

import plantsMock from "../utils/plantsMock";
import userEvent from "@testing-library/user-event";
import { Catalogo } from "../Catalogo";
import { Cart } from "../Cart";

describe("<CartItem />", () => {
  it("should render CartItem", () => {
    renderTheme(<CartItem product={plantsMock[0]} />);

    expect(
      screen.getByRole("heading", { name: "Cacto Plant 1" })
    ).toBeInTheDocument();
  });

  // Esse teste é basicamente para pegar coverage, visto que os botões pressionados aqui,
  // geram uma alteração em um state que no caso não estamos utilizando aqui no teste, logo as
  // alterações que os botões causam, não são possíveis de ser vistas neste componente a partir do
  // momento que passamos um objeto diretamente pra ele, e não como props de um state
  // A forma aqui pra testar exatamente alterações de valor seria renderizar o <Home />
  // pois assim faria o fetch e toda a lógica restante
  // é basicamente o que estamos fazendo abaixo, só que renderizando apenas os dois componentes necessários
  // sem o <Home />

  it("should increase quantity", () => {
    renderTheme(
      <>
        <Catalogo plants={plantsMock} /> <Cart />
      </>
    );

    const addBtn = screen.getByRole("button", { name: "Add To Cart" });

    userEvent.click(addBtn);

    const qty = screen.getByTestId("quantity");

    const btns = screen.getAllByRole("button");

    userEvent.click(btns[11]);

    expect(qty).toHaveTextContent(2);
  });

  it("should decrease quantity", () => {
    renderTheme(
      <>
        <Catalogo plants={plantsMock} /> <Cart />
      </>
    );

    const addBtn = screen.getByRole("button", { name: "Add To Cart" });

    userEvent.click(addBtn);

    const qty = screen.getByTestId("quantity");

    const btns = screen.getAllByRole("button");

    userEvent.click(btns[11]);
    userEvent.click(btns[11]);
    userEvent.click(btns[11]);
    userEvent.click(btns[10]);

    expect(qty).toHaveTextContent(3);
  });

  it("should remove product", () => {
    renderTheme(
      <>
        <Catalogo plants={plantsMock} /> <Cart />
      </>
    );

    const addBtn = screen.getByRole("button", { name: "Add To Cart" });

    userEvent.click(addBtn);

    const qty = screen.queryByTestId("quantity");

    const btns = screen.getAllByRole("button");

    userEvent.click(btns[12]);

    expect(qty).not.toBeInTheDocument();
  });
});
