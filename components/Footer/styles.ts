import styled, { css } from "styled-components";
import Link from "next/link";

// import {
//   FacebookHomePage,
//   TwitterHomePage,
//   GooglePlusHomePage,
// } from "common/styles/styledImages";

interface IMainFooterContainer {
  isHomePage?: boolean;
}

export const MainFooterContainer = styled.div<IMainFooterContainer>`
  background-color: #efefef;
  display: none;

  ${({ isHomePage }) =>
    isHomePage &&
    css`
      display: block;
    `}
`;

export const MainFooterContainerMini = styled.div`
  flex: 0 0 auto;
  background-color: transparent;
  @media (max-width: 900px) {
    background: transparent;
  }
`;

export const PrivacyLinks = styled(Link)`
  color: ${(props) => props.theme.secondaryTextColor};
  font-weight: 600;
  font-size: 16px;
`;

export const TopFooter = styled.div`
  padding: 50px 0;

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const MainInfoContainer = styled.div`
  display: flex;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

export const Social = styled.div`
  display: flex;

  @media (max-width: 1000px) {
    width: 40%;
    max-width: 250px;
    justify-content: space-between;
  }
`;

interface ISubFooter {
  isLogin?: boolean;
}

export const SubFooter = styled.div<ISubFooter>`
  display: flex;
  padding: 45px 0;
  justify-content: space-between;
  opacity: 0.6;

  @media (max-width: 1000px) {
    padding: 25px 0;
    flex-direction: column-reverse;
    align-items: center;
  }

  ${({ isLogin }) =>
    isLogin &&
    css`
      border-top: 1px solid ${(props) => props.theme.separatorColor};
    `}
`;

export const FooterLogo = styled.h2`
  color: #212121;
  ${(props) => props.theme.h2}
  letter-spacing: 4px;
  opacity: 0.8;
  margin: 0 30px 0 0;

  @media (max-width: 1000px) {
    margin: 25px 0 0 0;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SocialLink = styled.a`
  margin-left: 30px;

  @media (max-width: 1000px) {
    margin: 0;
  }
`;

export const SubFooterTitle = styled.h6`
  font-size: 22px;
  color: #212121;
  font-weight: 600;
  margin: 0 0 15px;

  @media (max-width: 992px) {
    font-size: 17px;
  }
  @media (max-width: 400px) {
    font-size: 15px;
  }
`;

export const AiopusInfo = styled.p`
  color: #fff;
  font-size: 16px;
  margin: 0 0 5px;
  opacity: 0.8;

  @media (max-width: 992px) {
    font-size: 15px;
  }
  @media (max-width: 400px) {
    font-size: 12px;
  }
`;

export const SubFooterInfo = styled.div`
  display: flex;
  align-items: baseline;
  font-size: 14px;
  line-height: 25px;
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

export const SubFooterText = styled.p`
  margin: 0;
  color: #000000;

  @media (max-width: 1000px) {
    margin: 15px 0 0 0;
    text-align: center;
  }
`;

export const PolicyButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 20%;
  min-width: 230px;

  span {
    color: ${(props) => props.theme.secondaryTextColor};
  }
`;

export const LinksColumn = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 200px;
  margin-right: 90px;
`;

export const FooterLink = styled(Link)`
  font-size: 17px;
  color: #000000;
  font-weight: 400;
  margin-bottom: 10px;
`;

export const SubFooterMini = styled(SubFooter)`
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const SubFooterInfoMini = styled(SubFooterInfo)`
  @media (max-width: 1000px) {
    margin-top: 10px;
  }
`;

export const TermsContainerMini = styled.div`
  @media (max-width: 900px) {
    display: none;
  }
`;

/////////////////////////////////

export const MainFooterContainerHomePage = styled.footer`
  flex: 0 0 auto;
  background-color: #2e2e2e;
`;

export const TopFooterHomePage = styled.div`
  padding: 85px 0;
`;

export const MainInfoContainerHomePage = styled.div`
  display: flex;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

export const SocialHomePage = styled.div`
  width: 25%;

  @media (max-width: 992px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const SocialContainerHomePage = styled.div`
  display: flex;
`;

export const ContactContainerHomePage = styled.div`
  width: auto;
`;

export const InfoOfficeContainerHomePage = styled.div``;

export const FooterLogoHomePage = styled.h2`
  color: #fff;
  ${(props) => props.theme.h2}
  letter-spacing: 4px;
  margin-right: 100px;
  opacity: 0.8;
  margin: 0 auto 10px;

  @media (max-width: 992px) {
    margin: 0;
  }
`;

export const InfoContainerHomePage = styled.div`
  display: flex;
  width: 40%;
  max-width: 450px;
  justify-content: space-between;

  @media (max-width: 992px) {
    width: 100%;
    margin-top: 50px;
  }
`;

export const SocialLinkHomePage = styled.a`
  margin-right: 20px;
  border-radius: 100%;
  ${({ backgroundColor }: { backgroundColor?: string }) =>
    backgroundColor &&
    css`
      @media (max-width: 992px) {
        background: ${backgroundColor};
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        padding: 8px;
      }
    `}
  @media (max-width: 450px) {
    width: 30px;
    height: 30px;
    margin-right: 12px;
  }
  @media (max-width: 350px) {
    width: 28px;
    height: 28px;
    margin-right: 10px;
  }
`;

export const SubFooterTitleHomePage = styled.h6`
  color: ${(props) => props.theme.orangeColor} !important;
  font-weight: bold;
  font-size: 20px;
  margin: 0 0 15px;

  @media (max-width: 992px) {
    font-size: 17px;
  }
  @media (max-width: 400px) {
    font-size: 15px;
  }
`;

export const AiopusInfoHomePage = styled.p`
  color: #fff;
  font-size: 16px;
  margin: 0 0 5px;
  opacity: 0.8;

  @media (max-width: 992px) {
    font-size: 15px;
  }
  @media (max-width: 400px) {
    font-size: 12px;
  }
`;

export const SubFooterInfoHomePage = styled(SubFooterInfo)`
  color: #fff;
`;

export const SubFooterHomePage = styled(SubFooter)`
  border-top: 1px solid #959595;
`;

// export const FacebookImage = styled(FacebookHomePage)`
//   fill: #ffffff;
//   @media (max-width: 350px) {
//     height: 15px;
//   }
// `;

// export const TwitterImage = styled(TwitterHomePage)`
//   fill: #64a8f2;
//   @media (max-width: 992px) {
//     fill: #f1f2f2;
//   }
// `;

// export const GooglePlusImage = styled(GooglePlusHomePage)`
//   fill: #ffffff;
// `;
