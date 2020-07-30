import React from "react";
import styled, { css } from "styled-components";

const { ReactComponent: Search } = require("assets/common/search_icon.svg");
const {
  ReactComponent: Portfolio,
} = require("assets/pages/profile/portfolioIcon.svg");
const {
  ReactComponent: Feedback,
} = require("assets/pages/profile/feedback.svg");
const { ReactComponent: About } = require("assets/pages/profile/abouTab.svg");
const { ReactComponent: Filter } = require("assets/pages/myFeed/filter.svg");
const { ReactComponent: Bell } = require("assets/common/header/bell.svg");
const { ReactComponent: Message } = require("assets/common/header/message.svg");

interface IProps {
  isFocus?: boolean;
  isError?: boolean;
}

const IconWrapper = styled.div<IProps>`
  stroke: ${(props) => props.theme.secondaryTextColor};

  ${({ isFocus }) =>
    isFocus &&
    css`
      stroke: ${(props) => props.theme.orangeColor};
    `}
  ${({ isError }) =>
    isError &&
    css`
      stroke: ${(props) => props.theme.errorColor};
    `}
`;

export const SearchIcon = (props: IProps) => {
  return (
    <IconWrapper {...props}>
      <Search />
    </IconWrapper>
  );
};

export const PortfolioIcon = (props: IProps) => {
  return (
    <IconWrapper {...props}>
      <Portfolio />
    </IconWrapper>
  );
};

export const AboutIcon = (props: IProps) => {
  return (
    <IconWrapper {...props}>
      <About />
    </IconWrapper>
  );
};

export const FeedbackIcon = (props: IProps) => {
  return (
    <IconWrapper {...props}>
      <Feedback />
    </IconWrapper>
  );
};

export const MessageBoxInbox = (props: IProps) => {
  return (
    <IconWrapper {...props}>
      <Message />
    </IconWrapper>
  );
};

export const MessageBoxNotifications = (props: IProps) => {
  return (
    <IconWrapper {...props}>
      <Bell />
    </IconWrapper>
  );
};

export const CloseIconForHeaderContainer = styled.div`
  stroke: ${(props) => props.theme.textOptions.color};
  ${({ isHomePage }: { isHomePage?: boolean }) =>
    isHomePage &&
    css`
      stroke: #fff;
    `};
`;

export const MenuBurgerForHeaderContainer = styled.div`
  stroke: ${(props) => props.theme.textOptions.color};
  ${({ isHomePage }: { isHomePage?: boolean }) =>
    isHomePage &&
    css`
      stroke: #fff;
    `};
`;

// export const MenuBurgerForHeader = (props: any) => {
//   return (
//     <MenuBurgerForHeaderContainer {...props}>
//       <MenuBurger />
//     </MenuBurgerForHeaderContainer>
//   );
// };

// export const TwitterHomePage = styled(Twitter)``;

// export const FacebookHomePage = styled(Facebook)``;

// export const GooglePlusHomePage = styled(GooglePlus)``;

export const MyFilterIconContainer = styled.div<IProps>`
  stroke: ${(props) => props.theme.orangeColor};

  ${({ isFocus }) =>
    isFocus &&
    css`
      stroke: #fff;
    `}
`;

export const MyFeedFilterIcon = (props: IProps) => (
  <MyFilterIconContainer {...props}>
    <Filter />
  </MyFilterIconContainer>
);
