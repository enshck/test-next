import React, { Fragment } from "react";
import styled from "styled-components";

import { Container } from "common/styles";
import HowItWorks from "./blocks/HowItWorks";
import SubHeader from "./blocks/SubHeader";
import WhyUs from "./blocks/WhyUs/index";
import AboutUs from "./blocks/AboutUs";
import OurParthners from "./blocks/OurPartners";
import SomeOfOurServices from "./blocks/SomeOfOurServices";
import Header from "components/Header";
import Footer from "components/Footer";

const Wrapper = styled.div``;

const HomePageContent = () => {
  return (
    <Wrapper>
      <Header />
      <SubHeader />
      <Container>
        <HowItWorks />
        <WhyUs />
        <SomeOfOurServices />
        <AboutUs />
        <OurParthners />
      </Container>
      <Footer />
    </Wrapper>
  );
};

export default HomePageContent;
