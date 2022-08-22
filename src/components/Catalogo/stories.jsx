import { Catalogo } from ".";

export default {
  title: "Catalogo",
  component: Catalogo,
  args: {},
};

export const Template = (args) => {
  return <Catalogo {...args} />;
};
