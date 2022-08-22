import * as Styled from "./styles";
import P from "prop-types";

export const Button = ({ children, onClick, idBtn = "", tab = "" }) => {
  return (
    <Styled.Container onClick={onClick} idBtn={idBtn} tab={tab}>
      {children}
    </Styled.Container>
  );
};

Button.propTypes = {
  children: P.node.isRequired,
  onClick: P.func.isRequired,
  idBtn: P.number,
  tab: P.number,
};
