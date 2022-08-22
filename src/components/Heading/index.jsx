import * as Styled from "./styles";
import P from "prop-types";

export const Heading = ({ children }) => {
  return <Styled.Container>{children}</Styled.Container>;
};

Heading.propTypes = {
  children: P.string.isRequired,
};
