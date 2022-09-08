import * as Styled from "./styles";
import P from "prop-types";
import Slider from "react-touch-drag-slider";
import { useState } from "react";
import { SectionWrapper } from "../SectionWrapper";
import { Menu } from "../Menu";
import { ImageContainer } from "../ImageContainer";
import { PlantInfo } from "../PlantInfo";
import { Dots } from "../Dots";
import { useLayoutContext } from "../contexts/LayoutContext";

export const Catalogo = ({ plants }) => {
  const [current, setCurrent] = useState(0);

  const [showCatalog] = useLayoutContext();
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
      <PlantInfo plant={plants[current]} />
    </Styled.Container>
  );
};

Catalogo.propTypes = {
  plants: P.array.isRequired,
};
