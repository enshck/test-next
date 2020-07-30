import React from "react";
import {
  MainContainer,
  ContentMainContainer,
  MainPicture,
  ContentContainer,
  AboutUsButton,
  H2,
  H3,
  P,
} from "./styles";
const mainPicture = require("assets/pages/home_page/About_Us_Img.png");
import { aboutUsText } from "../../content";

const AboutUs = () => (
  <MainContainer>
    <H2>About us</H2>
    <ContentMainContainer>
      <ContentContainer>
        <H3>Main idea</H3>
        {aboutUsText.map((elem, key) => (
          <P key={key}>{elem}</P>
        ))}
        <AboutUsButton>Read more about us</AboutUsButton>
      </ContentContainer>
      <MainPicture src={mainPicture} alt="main pic" />
    </ContentMainContainer>
  </MainContainer>
);

export default AboutUs;
