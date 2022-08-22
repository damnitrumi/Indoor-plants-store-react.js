import { ImageContainer } from ".";

export default {
  title: "ImageContainer",
  component: ImageContainer,
  args: {
    urlImg: "/assets/images/logo-light.png",
  },
};

export const Template = (args) => {
  return <ImageContainer {...args} />;
};
