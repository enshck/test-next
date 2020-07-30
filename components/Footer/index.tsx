import React from "react";
import { useRouter } from "next/router";

import { Container } from "common/styles";
import { footerLinks } from "common/Constants";
import {
  MainFooterContainer,
  MainFooterContainerMini,
  PrivacyLinks,
  TopFooter,
  MainInfoContainer,
  Social,
  SubFooter,
  FooterLogo,
  InfoContainer,
  SocialLink,
  SubFooterTitle,
  SubFooterInfo,
  PolicyButtons,
  LinksColumn,
  FooterLink,
  SubFooterText,
  SubFooterMini,
  SubFooterInfoMini,
  TermsContainerMini,
  SocialContainerHomePage,
  SocialLinkHomePage,
  AiopusInfoHomePage,
  ContactContainerHomePage,
  FooterLogoHomePage,
  InfoContainerHomePage,
  InfoOfficeContainerHomePage,
  MainFooterContainerHomePage,
  MainInfoContainerHomePage,
  SocialHomePage,
  SubFooterTitleHomePage,
  TopFooterHomePage,
  SubFooterInfoHomePage,
  SubFooterHomePage,
} from "./styles";

const Footer = () => {
  const router = useRouter();

  const { pathname } = router;

  if (pathname === "/") {
    return (
      <MainFooterContainerHomePage>
        <Container>
          <TopFooterHomePage>
            <MainInfoContainerHomePage>
              <SocialHomePage>
                <FooterLogoHomePage>AIOPUS</FooterLogoHomePage>
                {/* <SocialContainerHomePage>
                  <SocialLinkHomePage
                    href="https://twitter.com/"
                    rel="noopener noreferrer"
                    target="_blank"
                    backgroundColor={"#55ACEE"}
                  >
                    <TwitterImage />
                  </SocialLinkHomePage>
                  <SocialLinkHomePage
                    href="https://www.facebook.com/"
                    rel="noopener noreferrer"
                    target="_blank"
                    backgroundColor={"#3B5998"}
                  >
                    <FacebookImage />
                  </SocialLinkHomePage>
                  <SocialLinkHomePage
                    href="https://www.google.com/"
                    rel="noopener noreferrer"
                    target="_blank"
                    backgroundColor={"#DC4E41"}
                  >
                    <GooglePlusImage />
                  </SocialLinkHomePage>
                </SocialContainerHomePage> */}
              </SocialHomePage>
              <InfoContainerHomePage>
                <ContactContainerHomePage>
                  <SubFooterTitleHomePage>Contact Info</SubFooterTitleHomePage>
                  <AiopusInfoHomePage>Phone</AiopusInfoHomePage>
                  <AiopusInfoHomePage>+46 73 650 40 48</AiopusInfoHomePage>
                  <AiopusInfoHomePage>E-mail</AiopusInfoHomePage>
                  <AiopusInfoHomePage>aiopus@gmail.com</AiopusInfoHomePage>
                </ContactContainerHomePage>
                <InfoOfficeContainerHomePage>
                  <SubFooterTitleHomePage>Our office</SubFooterTitleHomePage>
                  <AiopusInfoHomePage>Gotgatan 94,</AiopusInfoHomePage>
                  <AiopusInfoHomePage>11862 Stockholm</AiopusInfoHomePage>
                  <AiopusInfoHomePage>Sweden</AiopusInfoHomePage>
                </InfoOfficeContainerHomePage>
              </InfoContainerHomePage>
            </MainInfoContainerHomePage>
          </TopFooterHomePage>
          <SubFooterHomePage>
            <SubFooterInfoHomePage>AIOPUS | Sweden</SubFooterInfoHomePage>
            <SubFooterInfoHomePage>
              © 2019 AIOPUS | All rights reserved
            </SubFooterInfoHomePage>
          </SubFooterHomePage>
        </Container>
      </MainFooterContainerHomePage>
    );
  }

  return (
    <footer>
      {pathname === "/login" ||
      pathname === "/registration" ||
      pathname === "/forgotPassword" ? (
        <MainFooterContainerMini>
          <Container>
            <SubFooterMini isLogin={true}>
              <TermsContainerMini style={{ visibility: "hidden" }}>
                Terms of Serivice | Privacy Policy
              </TermsContainerMini>
              <PolicyButtons>
                <PrivacyLinks href={"/"}>Terms of Serivice</PrivacyLinks>
                <span>|</span>
                <PrivacyLinks href={"/"}>Privacy Policy</PrivacyLinks>
              </PolicyButtons>
              <SubFooterInfoMini>
                © 2019 AIOPUS | All rights reserved
              </SubFooterInfoMini>
            </SubFooterMini>
          </Container>
        </MainFooterContainerMini>
      ) : (
        <MainFooterContainer
          isHomePage={pathname === "/" || pathname === "/new-job"}
        >
          <Container>
            <TopFooter>
              <MainInfoContainer>
                <InfoContainer>
                  {footerLinks.map((item, index) => {
                    if (pathname === "/new-job") {
                      if (item.title !== "Categories") {
                        return (
                          <LinksColumn key={index}>
                            <SubFooterTitle>{item.title}</SubFooterTitle>
                            {item.pageLinks.map((el, i) => (
                              <FooterLink key={i} href={el.link}>
                                {el.text}
                              </FooterLink>
                            ))}
                          </LinksColumn>
                        );
                      } else {
                        return null;
                      }
                    } else {
                      return (
                        <LinksColumn key={index}>
                          <SubFooterTitle>{item.title}</SubFooterTitle>
                          {item.pageLinks.map((el, i) => (
                            <FooterLink key={i} href={el.link}>
                              {el.text}
                            </FooterLink>
                          ))}
                        </LinksColumn>
                      );
                    }
                  })}
                </InfoContainer>
              </MainInfoContainer>
            </TopFooter>

            <SubFooter>
              <SubFooterInfo>
                <FooterLogo>AIOPUS</FooterLogo>
                <SubFooterText>
                  Terms of Service | Privacy Policy | © 2019 AIOPUS{" "}
                  <span>All rights reserved</span>
                </SubFooterText>
              </SubFooterInfo>
              <Social>
                <SocialLink href="https://www.facebook.com/" target="_blank">
                  <img
                    src={require("assets/common/facebook_black.png")}
                    alt="facebook"
                  />
                </SocialLink>
                <SocialLink href="https://twitter.com/" target="_blank">
                  <img
                    src={require("assets/common/twitter_black.png")}
                    alt="twitter"
                  />
                </SocialLink>

                <SocialLink href="https://www.linkedin.com/" target="_blank">
                  <img
                    src={require("assets/common/linkedin_black.png")}
                    alt="linkedin"
                  />
                </SocialLink>
              </Social>
            </SubFooter>
          </Container>
        </MainFooterContainer>
      )}
    </footer>
  );
};

export default Footer;
