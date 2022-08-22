import * as Styled from "./styles";
import P from "prop-types";

export const SectionWrapper = ({ children, bgUrl = "" }) => {
  return <Styled.Container bgUrl={bgUrl}>{children}</Styled.Container>;
};

SectionWrapper.propTypes = {
  children: P.node.isRequired,
  bgUrl: P.string,
};
