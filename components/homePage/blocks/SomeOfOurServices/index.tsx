import React, { useEffect, useState } from "react";

const arrowRight = require("assets/pages/home_page/someOfOurServices/rightArrow.png");
import {
  someOfOurServicesData,
  someOfOurServicesDataForSmallScreen,
} from "../../content";
import {
  MainContainer,
  H2,
  H3,
  P,
  ArrowRight,
  GridContainer,
  GridElementBlock,
  GridElementPicture,
  GridElementBlockPicture,
  GridElementBlockContent,
  MainContentContainer,
} from "./styles";

const SomeOfOurServices = () => {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    window.addEventListener("resize", () => setScreenWidth(window.innerWidth));
    setScreenWidth(window.innerWidth);

    return () => {
      window.removeEventListener("resize", () =>
        setScreenWidth(window.innerWidth)
      );
    };
  }, []);

  return (
    <MainContainer>
      <H2>Some of our services</H2>
      <GridContainer>
        {screenWidth < 1200
          ? someOfOurServicesDataForSmallScreen.map((elem, key) => {
              const { title, text, type, img } = elem;
              return type === "textBlock" ? (
                <GridElementBlock key={key}>
                  <GridElementBlockContent>
                    <H3>{title}</H3>
                    <P>{text}</P>
                  </GridElementBlockContent>
                  <ArrowRight src={arrowRight} alt={arrowRight} />
                </GridElementBlock>
              ) : (
                <GridElementBlockPicture key={key}>
                  <GridElementPicture src={img} alt={img} />
                </GridElementBlockPicture>
              );
            })
          : someOfOurServicesData.map((elem, key) => {
              const { title, text, type, img } = elem;

              return type === "textBlock" ? (
                <GridElementBlock key={key}>
                  <GridElementBlockContent>
                    <H3>{title}</H3>
                    <P>{text}</P>
                  </GridElementBlockContent>
                  <ArrowRight src={arrowRight} alt={arrowRight} />
                </GridElementBlock>
              ) : (
                <GridElementBlockPicture key={key}>
                  <GridElementPicture src={img} alt={img} />
                </GridElementBlockPicture>
              );
            })}
      </GridContainer>
    </MainContainer>
  );
};

export default SomeOfOurServices;
