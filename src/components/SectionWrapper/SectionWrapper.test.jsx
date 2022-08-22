import { SectionWrapper } from ".";
import { renderTheme } from "../../styles/render-theme";
import { screen } from "@testing-library/react";

describe("SectionWrapper", () => {
  it("should render SectionWrapper", () => {
    renderTheme(
      <SectionWrapper>
        <h1>Hello World!</h1>
      </SectionWrapper>
    );
    expect(
      screen.getByRole("heading", { name: "Hello World!" })
    ).toBeInTheDocument();
  });

  it("should render SectionWrapper with background", () => {
    renderTheme(
      <SectionWrapper bgUrl="a.svg">
        <h1>Hello World!</h1>
      </SectionWrapper>
    );

    const sectionWrapper = screen.getByRole("heading", {
      name: "Hello World!",
    }).parentElement;

    expect(sectionWrapper).toHaveStyleRule("background", "url(a.svg)");
  });
});
