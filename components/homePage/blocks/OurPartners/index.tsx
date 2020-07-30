import React from "react";

import { MainContainer, PictureContainer, H2 } from "./styles";
import { ourPartnersIconsData } from "../../content";

const OurPartners = () => (
  <MainContainer>
    <H2>Our partners</H2>
    <PictureContainer>
      {ourPartnersIconsData.map((elem, key) => (
        <img src={elem} alt={elem} key={key} />
      ))}
    </PictureContainer>
  </MainContainer>
);

export default OurPartners;
