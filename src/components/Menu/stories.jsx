import { Menu } from "./index";

export default {
  title: "Menu",
  component: Menu,
  args: {},
};

export const Template = (args) => {
  return <Menu {...args} />;
};
