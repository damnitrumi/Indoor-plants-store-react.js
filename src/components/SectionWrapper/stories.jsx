import { SectionWrapper } from "./";

export default {
  title: "SectionWrapper",
  component: SectionWrapper,
  args: {
    children: "",
    background: true,
  },
};

export const Template = (args) => {
  return <SectionWrapper {...args} />;
};
