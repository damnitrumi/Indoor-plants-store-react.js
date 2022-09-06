import { Catalogo } from ".";
import plantsMock from "../utils/plantsMock";

export default {
  title: "Catalogo",
  component: Catalogo,
  args: { plants: plantsMock },
};

export const Template = (args) => {
  return <Catalogo {...args} />;
};
