import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";
import { Catalogo } from ".";

import plantsMock from "../utils/plantsMock";
import { Menu } from "../Menu";
import userEvent from "@testing-library/user-event";

describe("<Catalogo />", () => {
  it("should render Catalogo component", () => {
    renderTheme(<Catalogo plants={plantsMock} />);

    // Aqui eu sei que ele deveria renderizar as imagens na tela na quantidade de elementos no array recebido + as 3 imagens do Menu, vou usar isso para testar se está renderizando corretamente

    expect(screen.getAllByRole("img")).toHaveLength(plantsMock.length + 3);
  });

  it("should render", () => {
    const { container } = renderTheme(<Catalogo plants={plantsMock} />);

    expect(container).toMatchSnapshot();
  });

  it("should call render with correct style", () => {
    const { container } = renderTheme(
      <>
        <Menu />
        <Catalogo plants={plantsMock} />
      </>
    );

    const btns = screen.getAllByRole("button");
    const cart = container.firstElementChild.nextElementSibling;

    userEvent.click(btns[0]);

    expect(cart).toHaveStyle("transform: translateX(0)");

    // Aqui eu só fiz esse teste pra testar o style ao clicar no botão pra ele aparecer, basicamente pra coverage
  });
});
