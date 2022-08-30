import * as Styled from "./styles";
import { Heading } from "../Heading";
import { Button } from "../Button";
import { Text } from "../Text";
import { useState } from "react";

export const PlantInfo = () => {
  const [tab, setTab] = useState(1);
  const activeTab = (i) => setTab(i);

  return (
    <Styled.Container>
      <Styled.NameContainer>
        <Heading>Teste</Heading>
        <Heading>Teste</Heading>
      </Styled.NameContainer>
      <Styled.TabsWrapper>
        <Styled.TabsContainer>
          <Styled.PlantBtn onClick={() => activeTab(1)} idBtn={1} tab={tab}>
            Details
          </Styled.PlantBtn>
          <Styled.PlantBtn onClick={() => activeTab(2)} idBtn={2} tab={tab}>
            Reviews
          </Styled.PlantBtn>
          <Styled.PlantBtn onClick={() => activeTab(3)} idBtn={3} tab={tab}>
            About
          </Styled.PlantBtn>
        </Styled.TabsContainer>
        <Styled.Tab>
          {tab == 1 && (
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              similique eius quidem nobis voluptatibus placeat quae aliquam
              doloribus sit reiciendis beatae, odit commodi inventore eos
              delectus, eaque nihil sed facere.
            </Text>
          )}
          {tab == 2 && <Text>Teste 2</Text>}
          {tab == 3 && <Text>Teste 3</Text>}
        </Styled.Tab>
      </Styled.TabsWrapper>
      <Button onClick={() => console.log("Add to cart btn")}>
        Add To Cart
      </Button>
    </Styled.Container>
  );
};
