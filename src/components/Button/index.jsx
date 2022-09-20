import * as Styled from "./styles";
import P from "prop-types";

export const Button = ({
  children,
  onClick,
  idBtn = "",
  tab = "",
  disabled = false,
}) => {
  return (
    <Styled.Container
      disabled={disabled}
      onClick={onClick}
      idBtn={idBtn}
      tab={tab}
    >
      {children}
    </Styled.Container>
  );
};

Button.propTypes = {
  children: P.node.isRequired,
  onClick: P.func.isRequired,
  idBtn: P.number,
  tab: P.number,
  disabled: P.bool,
};
