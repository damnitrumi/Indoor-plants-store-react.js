import { About } from ".";

export default {
  title: "About",
  component: About,
  args: {},
};

export const Template = (args) => {
  return <About {...args} />;
};
