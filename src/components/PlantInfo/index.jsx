import * as Styled from "./styles";
import P from "prop-types";

import { Heading } from "../Heading";
import { Button } from "../Button";
import { Text } from "../Text";
import { useState } from "react";

import { useCartContext } from "../contexts/CartContext";

export const PlantInfo = ({ plant }) => {
  const [tab, setTab] = useState(1);
  const activeTab = (i) => setTab(i);

  const [, addItemToCart] = useCartContext();

  return (
    <Styled.Container>
      <Styled.NameContainer>
        <Heading>{plant.name}</Heading>
        <Heading>{plant.price}</Heading>
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
          {tab == 1 && <Text>{plant.details}</Text>}
          {tab == 2 && <Text>{plant.reviews}</Text>}
          {tab == 3 && <Text>{plant.about}</Text>}
        </Styled.Tab>
      </Styled.TabsWrapper>
      <Button
        onClick={() => {
          console.log("added");
          addItemToCart(plant);
        }}
      >
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
    id: P.number,
  }).isRequired,
};
