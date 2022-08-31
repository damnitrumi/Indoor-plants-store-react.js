import * as Styled from "./styles";
import { Heading } from "../Heading";
import { Button } from "../Button";
import { Text } from "../Text";
import { useState } from "react";

import P from "prop-types";

export const PlantInfo = ({
  plant: { name, price, details, reviews, about },
}) => {
  const [tab, setTab] = useState(1);
  const activeTab = (i) => setTab(i);

  return (
    <Styled.Container>
      <Styled.NameContainer>
        <Heading>{name}</Heading>
        <Heading>{price}</Heading>
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
          {tab == 1 && <Text>{details}</Text>}
          {tab == 2 && <Text>{reviews}</Text>}
          {tab == 3 && <Text>{about}</Text>}
        </Styled.Tab>
      </Styled.TabsWrapper>
      <Button onClick={() => console.log("Add to cart btn")}>
        Add To Cart
      </Button>
    </Styled.Container>
  );
};

PlantInfo.propTypes = {
  plant: P.shape({
    name: P.string,
    price: P.string,
    details: P.string,
    reviews: P.string,
    about: P.string,
    image: P.string,
    quantity: P.number,
  }).isRequired,
};
