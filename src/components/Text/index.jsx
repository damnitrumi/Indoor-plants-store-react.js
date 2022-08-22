import * as Styled from "./styles";
import P from "prop-types";

export const Text = ({ children }) => {
  return (
    <Styled.Container
      dangerouslySetInnerHTML={{ __html: children }}
    ></Styled.Container>
  );
};

Text.propTypes = {
  children: P.string,
};
