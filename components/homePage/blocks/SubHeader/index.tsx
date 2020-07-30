import React from "react";
import Link from "next/link";

const backgroundImage = require("assets/pages/home_page/main_header.png");
import {
  MainContainer,
  BackgroundImage,
  BannerText,
  BlueRectagle,
  ShadowWrapContainer,
  String,
  SubHeaderWrapper,
  TextContainer,
  EmptyButton,
  FullButton,
  ButtonsContainer,
  MobileButtonContainer,
} from "./styles";

const SubHeader = () => (
  <SubHeaderWrapper>
    <ShadowWrapContainer />
    <BackgroundImage src={backgroundImage} alt="main" />
    <BlueRectagle />
    <TextContainer>
      <MainContainer>
        <BannerText>
          AIOPUS
          <br />
          digitalizing consultancy
          <br /> market
        </BannerText>
        <ButtonsContainer>
          <Link href={"/registration?type=recruiters"}>
            <FullButton>I want to find a consultant</FullButton>
          </Link>
          <Link href={"/registration?type=consultants"}>
            <EmptyButton>I'm looking for assigments</EmptyButton>
          </Link>
        </ButtonsContainer>
        <MobileButtonContainer>
          <Link href={"/registration"}>
            <FullButton>Get started</FullButton>
          </Link>
        </MobileButtonContainer>
        <String>We optimise the matching process</String>
      </MainContainer>
    </TextContainer>
  </SubHeaderWrapper>
);
export default SubHeader;
