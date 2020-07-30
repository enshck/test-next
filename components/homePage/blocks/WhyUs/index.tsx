import React, { Fragment } from "react";

const BrainSvg = require("assets/pages/home_page/brain.svg");
const CompSvg = require("assets/pages/home_page/comp.svg");
const HandsSvg = require("assets/pages/home_page/hands.svg");
import { WhyUsWrapper, BlockHead, TextHead, Text, SingleBlock } from "./styles";

const WhyUs = () => (
  <Fragment>
    <BlockHead>Why you should choose us</BlockHead>
    <WhyUsWrapper>
      <SingleBlock>
        <img src={BrainSvg} alt="" />
        <TextHead>Optimization</TextHead>
        <Text>
          Our AI-algorithms optimize the consultant-assignment matching in terms
          of competence, location, costs, experiences and other filters you
          would like to.
        </Text>
      </SingleBlock>
      <SingleBlock>
        <img src={CompSvg} alt="" />
        <TextHead>Outsourcer</TextHead>
        <Text>
          As outsourcer you get consultancy management workspace to help you
          manage the hired consultants, assignments length, contact information
          history and more.
        </Text>
      </SingleBlock>
      <SingleBlock>
        <img src={HandsSvg} alt="" />
        <TextHead>Supporting</TextHead>
        <Text>
          We will help you along the way to become an independent consultant. We
          help you to create the company, to find an assignment and company
          administration together with our partners.
        </Text>
      </SingleBlock>
    </WhyUsWrapper>
  </Fragment>
);

export default WhyUs;
