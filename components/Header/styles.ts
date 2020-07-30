import styled, { css } from "styled-components";
import Link from "next/link";
import { OrangeButton } from "common/styles";
import { Container } from "common/styles";

export const AppBar = styled.div`
  background-color: "transparent";
  box-shadow: "none";
  margin: "0 auto";
  max-width: "1640px";
`;

export const AppbarLogin = styled.div`
  width: 100%;
`;

export const MainContainer = styled(Container)`
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  align-items: center;
  border-bottom: ${(props) => props.theme.separatorColor};
  @media (min-width: 992px) {
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    justify-content: space-between;
  }
  @media (max-width: 500px) {
    padding-top: 0;
  }
  @media (max-width: 1200px) {
    background: #fff;
  }
`;

export const MainContainerLogin = styled(Container)`
  width: 100%;
  height: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 0;
  @media (max-width: 1200px) {
    padding-left: 20px;
  }
  @media (max-width: 900px) {
    padding-left: 0;
    background: #fff;
  }
`;
export const ContentLoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  @media (max-width: 900px) {
    margin: 0 20px;
  }
`;

interface IToolbarProps {
  isLogin?: boolean;
  isHomePage?: boolean;
  isPositionFixed?: boolean;
  isScrolled?: boolean;
}

export const Toolbar = styled.div<IToolbarProps>`
	left: 0;
	right: 0;
	padding: 0;
	justify-content: space-between;
	z-index: 999;
	transition: 0.4s;
	background: #fff;
	@media (max-width: 992px) {
		justify-content: space-between;
	}

	${({ isLogin }) =>
    isLogin &&
    css`
      position: relative;
      background: ${(props) => props.theme.backgroundColor};
    `}

	${({ isHomePage }) =>
    isHomePage &&
    css`
      background-color: ${(props) => props.theme.loginFormBackground};
      position: fixed;
    `}

	${({ isPositionFixed }) =>
    isPositionFixed &&
    css`
      position: fixed;
    `}

	${({ isScrolled, isHomePage }) =>
    isScrolled &&
    isHomePage &&
    css`
      border-bottom: 1px solid ${(props) => props.theme.separatorColor};
      background: #fff;
    `}
`;

export const HeaderLink = styled(Link)``;

export const HomePageHeaderLink = styled.div`
  margin-right: 90px;
  letter-spacing: 4px;
  ${(props) => props.theme.h2};
  font-weight: 700;

  a {
    color: #fff;
  }
`;

export const DesktopHeaderLink = styled(Link)`
  margin: 0 10px;
`;

export const MenuContainer = styled.div`
  justify-content: flex-end;
  z-index: 800;
  display: flex;
  align-items: center;
  font-size: 16px;
  p {
    font-size: 18px;
    color: #000000;
    margin: 0;
    opacity: 1 !important;
  }
  span {
    color: #fff;
  }

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

interface IButtonProps {
  isSelected?: boolean;
  isLanguageButton?: boolean;
  isChangedLanguage?: boolean;
}

export const Button = styled.button<IButtonProps>`
	font-size: 20px;
	font-weight: 600;
	border: none;
	background-color: transparent;
	padding: 5px;
	margin-right: 65px;
	color: #fff;
	font-family: 'Source Sans Pro' !important;
	font-size: 18px;
	&:focus {
		outline: none;
	}
	&:hover {
		cursor: pointer;
	}
	${({ isSelected }) =>
    isSelected &&
    css`
      border-bottom: 2px solid #fff;
    `}
	${({ isLanguageButton }) =>
    isLanguageButton &&
    css`
      margin: 0;
      padding: 2px;
      font-weight: 600;
      opacity: 0.7;
    `}
	${({ isChangedLanguage }) =>
    isChangedLanguage &&
    css`
      color: #fff !important;
      opacity: 1;
    `}
`;

export const MessageButton = styled.div`
  font-weight: 600;
  border: none;
  background-color: transparent;
  color: #212121;
  font-family: "Source Sans Pro" !important;
  font-size: 18px;
  cursor: pointer;
  margin-right: 20px;
`;

export const LogoLink = styled(Link)`
  font-family: "Exo 2";
  letter-spacing: 4px;
  margin-right: 100px;
  font-size: 40px;
  color: #fff;
  font-weight: 600;
`;

export const SmallMenuMainContainer = styled.div`
  display: flex;
`;

export const ButtonsBlock = styled.div`
  display: flex;
`;

export const LoginButton = styled(OrangeButton)<IButtonProps>`
  margin-right: 30px;
  border-radius: 2px;
  font-family: "Source Sans Pro" !important;
  font-size: 16px;
`;

export const ProfileContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
  @media (max-width: 1200px) {
    position: absolute;
    right: 0;
  }
`;

export const LinkButton = styled(Link)`
  border-radius: 2px;
  color: ${(props) => props.theme.orangeColor};
  border: 2px solid ${(props) => props.theme.orangeColor};
  padding: 10px 15px;
  transition: 0.4s;
  font-weight: 500;
  margin-right: 30px;
  font-family: "Source Sans Pro" !important;

  :hover {
    background: ${(props) => props.theme.orangeColor};
    color: #fff;
  }
`;

export const MenuContainerLogin = styled.div`
  @media (max-width: 900px) {
    display: flex;
    width: 100%;
    justify-content: center;
    ${HeaderLink} {
      font-size: 20px;
    }
  }
`;

export const ArrowBack = styled(Link)`
  @media (max-width: 1200px) {
    position: absolute;
    left: 0;
  }
  @media (min-width: 901px) {
    display: none;
  }
`;

export const MessagesButtonContainer = styled.div`
  margin-right: 30px;
`;
