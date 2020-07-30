import React from "react";
import styled, { css } from "styled-components";
import Link from "next/link";

import { StyledInput } from "common/styles";
import {
  CloseIconForHeaderContainer,
  MenuBurgerForHeaderContainer,
} from "common/styles/styledImages";

export const CloseIconContainer = styled(CloseIconForHeaderContainer)`
  cursor: pointer;
  user-select: none;
  @media (max-width: 1200px) {
    position: absolute;
    left: 0;
  }
  ${({ isHomePage }: { isHomePage?: boolean }) =>
    isHomePage &&
    css`
      position: relative !important;
      order: 1;
    `}
`;

export const MenuBurgerContainer = styled(MenuBurgerForHeaderContainer)`
  cursor: pointer;
  user-select: none;
  @media (max-width: 1200px) {
    position: absolute;
    left: 0;
  }
  ${({ isHomePage }: { isHomePage?: boolean }) =>
    isHomePage &&
    css`
      position: relative !important;
      order: 1;
    `}
`;

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 800;

  @media (max-width: 500px) {
    padding-top: 20px;
  }
`;

interface IPopoverMenu {
  displaying?: boolean;
}

export const PopoverMenu = styled.div<IPopoverMenu>`
  position: absolute;
  top: 52px;
  left: 0;
  width: 100%;
  height: 0;
  display: flex;
  justify-content: center;
  background: #fff;
  visibility: hidden;
  transition: 0.3s;
  box-sizing: border-box;
  box-shadow: -1px 0px 10px 0px rgba(0, 0, 0, 0.55);
  border-radius: 5px;

  ul {
    list-style: none;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    visibility: hidden;

    li {
      width: 100%;
    }
  }

  ${({ displaying }) =>
    displaying &&
    css`
      height: 250px;
      padding: 10px;
      visibility: visible;

      ul {
        visibility: visible;
      }
    `}
`;

export const MenuLink = styled(Link)`
  color: #000;
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  width: 100%;
  padding: 15px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
`;

export const MenuButton = styled.div`
  color: #000;
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  width: 100%;
  padding: 15px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
`;

export const SignUpButton = styled(Link)`
  font-size: 16px;
  font-weight: 600;
  color: ${(props) => props.theme.orangeColor};
  opacity: 1;
  margin: 0;
  height: 48px;
  box-sizing: border-box;
  align-items: center;
  display: flex;
  @media (max-width: 1200px) {
    position: absolute;
    right: 0;
  }
  @media (max-width: 600px) {
    height: 30px;
  }
  @media (max-width: 400px) {
    height: 25px;
  }
  ${({ isHomePage }: { isHomePage?: boolean }) =>
    isHomePage &&
    css`
      display: none;
    `}
`;

export const DrawerContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1200px) {
    justify-content: center;
  }
  ${({ isHomePage }: { isHomePage?: boolean }) =>
    isHomePage &&
    css`
      justify-content: space-between !important;
    `}
`;

export const EmptyContainer = styled.div`
  width: 30px;
  height: 48px;
  box-sizing: border-box;
  @media (max-width: 600px) {
    height: 30px;
  }
  @media (max-width: 400px) {
    height: 25px;
  }
`;

export const StyledSearchInput = styled(StyledInput)`
  border-width: 1px 0 1px 1px;
  border-radius: 3px 0 0 3px;
  background-color: #f3f3f3;
  max-width: 100%;
  width: 100%;
  @media (max-width: 1500px) {
    border-width: 1px;
  }
`;

export const SearchInputContainer = styled.div`
  margin-top: 40px;
  width: 100%;
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 25px;
  width: 100%;
`;

export const MenuElement = styled(Link)`
  border-top: 1px solid ${(props) => props.theme.separatorColor};
  padding: 15px 0;
  width: 100%;
  font-size: 18px;
  font-weight: 600;
  color: #212121;
  cursor: pointer;
`;

export const ProfileMenuContainer = styled.div`
  width: 100%;
  border-top: 1px solid ${(props) => props.theme.separatorColor};
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  @media (max-width: 500px) {
    margin-top: 15px;
  }
`;

interface IProfileMenuElement {
  withoutSplitLine?: boolean;
}

export const ProfileMenuElement = styled.div<IProfileMenuElement>`
  border-bottom: 1px solid ${(props) => props.theme.separatorColor};
  padding: 15px 0;
  font-weight: 600;
  font-size: 18px;
  width: 100%;
  display: flex;
  align-items: center;

  img {
    margin-right: 12px;
  }

  span {
    color: ${(props) => props.theme.orangeColor};
    margin-left: 4px;
  }

  ${({ withoutSplitLine }) =>
    withoutSplitLine &&
    css`
      border-bottom: none;
    `}
`;

export const ProfileMenuLink = styled(Link)`
  border-bottom: 1px solid ${(props) => props.theme.separatorColor};
  padding: 15px 0;
  color: #000;
  font-weight: 600;
  font-size: 18px;
  width: 100%;
  display: block;
`;

export const ExpansionPanelContainer = styled.div`
  width: 100%;
`;

export const StyledContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  max-width: 700px;
  padding: 0 20px;
  padding-bottom: 80px;
`;

export const ImageContainer = styled.div`
  margin-right: 12px;
`;

export const MenuImageContainer = styled.div`
  margin-right: 12px;
`;
