import * as Styled from "./styles";
import P from "prop-types";

export const ImageContainer = ({ urlImg }) => {
  return <Styled.Container src={urlImg} />;
};

ImageContainer.propTypes = {
  urlImg: P.string.isRequired,
};
