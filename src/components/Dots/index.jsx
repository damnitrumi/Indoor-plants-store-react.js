import * as Styled from "./styles";
import P from "prop-types";

export const Dots = ({ current, index }) => {
  return <Styled.Container current={current} index={index}></Styled.Container>;
};

Dots.propTypes = {
  current: P.number.isRequired,
  index: P.number.isRequired,
};
