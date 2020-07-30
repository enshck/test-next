import React from "react";
import Link from "next/link";

import {
  Wrapper,
  TextBlock,
  Text,
  ImageContainer,
  TopImage,
  BlueRectangle,
  BackgroundImage,
  Title,
  ButtonsContainer,
  EmptyButton,
  FullButton,
  MobileButtonsContainer,
} from "./styles";

const HowItWorks = () => (
  <Wrapper>
    <TextBlock>
      <Title>How it works?</Title>
      <Text>
        We help clients find the right consultant in several industries using
        reliable and intelligent algorithms. The client has the opportunity to
        look at the profile, what other clients have said about the consultant
        and a video pitch of the consultant before the interview. We help
        consultants find assignments and take care of all administration around.
      </Text>
      <MobileButtonsContainer>
        <Link href={"/registration?type=recruiters"}>
          <FullButton>I want to find a consultant</FullButton>
        </Link>
        <Link href={"/registration?type=consultants"}>
          <EmptyButton>I'm looking for assigments</EmptyButton>
        </Link>
      </MobileButtonsContainer>
      <ButtonsContainer>
        <Link href={"/registration"}>
          <FullButton>Get Started</FullButton>
        </Link>
      </ButtonsContainer>
    </TextBlock>
    <ImageContainer>
      <TopImage src={require("assets/pages/home_page/hiw.png")} alt="" />
      <BackgroundImage>
        <BlueRectangle />
        <img src={require("assets/pages/home_page/hiw2.png")} alt="" />
      </BackgroundImage>
    </ImageContainer>
  </Wrapper>
);

export default HowItWorks;
