import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";
import { Catalogo } from ".";

import plantsMock from "../utils/plantsMock";

describe("<Catalogo />", () => {
  it("should render", () => {
    renderTheme(<Catalogo plants={plantsMock} />);

    // Aqui eu sei que ele deveria renderizar as imagens na tela na quantidade de elementos no array recebido + as 3 imagens do Menu, vou usar isso para testar se está renderizando corretamente

    expect(screen.getAllByRole("img")).toHaveLength(plantsMock.length + 3);
  });

  it("should render", () => {
    const { container } = renderTheme(<Catalogo plants={plantsMock} />);

    expect(container).toMatchSnapshot();
  });
});
