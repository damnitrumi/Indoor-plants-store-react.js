import * as Styled from "./styles";
import { theme } from "../../styles/theme";

import { ImageContainer } from "../ImageContainer";
import { SectionWrapper } from "../SectionWrapper";

export const Loading = () => {
  return (
    <Styled.Container>
      <SectionWrapper bgUrl={theme.backgrounds.loading}>
        <ImageContainer urlImg="/assets/images/logo-light.png" />
      </SectionWrapper>
    </Styled.Container>
  );
};
