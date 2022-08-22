import * as Styled from "./styles";
import Slider from "react-touch-drag-slider";
import { useState } from "react";
import { SectionWrapper } from "../SectionWrapper";
import { Menu } from "../Menu";
import { ImageContainer } from "../ImageContainer";
import { PlantInfo } from "../PlantInfo";
import { Dots } from "../Dots";
import { useLayoutContext } from "../contexts/LayoutContext";

const plants = [
  {
    name: "Cacto Plant 1",
    price: "20.00",
    details: "Cactus are succulent perennial plants",
    reviews:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lobortis aliquam elit. Vestibulum eget metus",
    about:
      "Nulla eu massa facilisis, pulvinar nulla at, varius mauris. Fusce id fringilla dolor, ac auctor.",
    image: "/assets/images/plant.png",
    quantity: 0,
  },
  {
    name: "Cacto Plant 2",
    price: "20.00",
    details: "Cactus are succulent perennial plants",
    reviews:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lobortis aliquam elit. Vestibulum eget metus",
    about:
      "Nulla eu massa facilisis, pulvinar nulla at, varius mauris. Fusce id fringilla dolor, ac auctor.",
    image: "/assets/images/plant.png",
    quantity: 0,
  },
  {
    name: "Cacto Plant 3",
    price: "21.00",
    details: "Cactus are succulent perennial plants",
    reviews:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lobortis aliquam elit. Vestibulum eget metus",
    about:
      "Nulla eu massa facilisis, pulvinar nulla at, varius mauris. Fusce id fringilla dolor, ac auctor.",
    image: "/assets/images/plant.png",
    quantity: 0,
  },
  {
    name: "Cacto Plant 4",
    price: "22.00",
    details: "Cactus are succulent perennial plants",
    reviews:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lobortis aliquam elit. Vestibulum eget metus",
    about:
      "Nulla eu massa facilisis, pulvinar nulla at, varius mauris. Fusce id fringilla dolor, ac auctor.",
    image: "/assets/images/plant.png",
    quantity: 0,
  },
  {
    name: "Cacto Plant 5",
    price: "23.00",
    details: "Cactus are succulent perennial plants",
    reviews:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lobortis aliquam elit. Vestibulum eget metus",
    about:
      "Nulla eu massa facilisis, pulvinar nulla at, varius mauris. Fusce id fringilla dolor, ac auctor.",
    image: "/assets/images/plant.png",
    quantity: 0,
  },
];

export const Catalogo = () => {
  const [current, setCurrent] = useState(0);

  const [, showCatalog] = useLayoutContext();
  return (
    <Styled.Container visible={showCatalog}>
      <SectionWrapper>
        <Menu dark />
        <Styled.SliderContainer>
          <Slider
            onSlideComplete={(i) => {
              console.log("finished dragging, current slide is", i);
              setCurrent(i);
            }}
            onSlideStart={(i) => {
              console.log("started dragging on slide", i);
            }}
            activeIndex={0}
            threshHold={100}
            transition={0.5}
            scaleOnDrag={true}
          >
            {plants.map(({ image }, i) => {
              return (
                <Styled.SlidesContainer key={i}>
                  <ImageContainer urlImg={image} />
                  <Styled.BgContainer />
                </Styled.SlidesContainer>
              );
            })}
          </Slider>
        </Styled.SliderContainer>
      </SectionWrapper>
      <Styled.DotsContainer>
        {plants.map((el, i) => {
          return <Dots current={current} index={i} key={i} />;
        })}
      </Styled.DotsContainer>
      <PlantInfo />
    </Styled.Container>
  );
};
