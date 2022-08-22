import * as Styled from "./styles";
import { theme } from "../../styles/theme";

import { SectionWrapper } from "../SectionWrapper";
import { Text } from "../Text";
import { Heading } from "../Heading";

import aboutText from "./aboutMock";
import { Menu } from "../Menu";

export const About = () => {
  return (
    <Styled.Container>
      <SectionWrapper bgUrl={theme.backgrounds.about}>
        <Menu />
        <Styled.AboutContainer>
          <Heading>How to grow plants indoor</Heading>
          {aboutText.map((text, i) => {
            return <Text key={i}>{text}</Text>;
          })}
        </Styled.AboutContainer>
      </SectionWrapper>
    </Styled.Container>
  );
};
