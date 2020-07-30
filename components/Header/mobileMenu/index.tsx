import React, { useState } from "react";
import styled, { css } from "styled-components";
import { useRouter } from "next/router";

import {
  MainContainer,
  SignUpButton,
  HeaderContent,
  MenuBurgerContainer,
  CloseIconContainer,
} from "./styles";
import { HeaderLink } from "../styles";
// const {
//   ReactComponent: MenuBurger,
// } = require("assets/common/header/burger.svg");
// const { ReactComponent: CloseIcon } = require("assets/common/header/close.svg");
const burger = require("assets/common/header/burger.svg");
const close = require("assets/common/header/close.svg");

interface IMenuItem {
  name: string;
  link: string;
}

interface IProps {
  openPopoverMessage: (isOpenPopover: boolean) => void;
  setChangedMenuItem: (type: string) => void;
  items?: IMenuItem[];
}

const MobileMenu = ({
  openPopoverMessage,
  setChangedMenuItem,
  items,
}: IProps) => {
  const [openedDrawer, setOpenedDrawer] = useState<string>("");
  const router = useRouter();
  // const userAuthData = useSelector(state => state.userAuthData)

  const SmallLogo = styled(HeaderLink)`
    font-size: 20px;
    user-select: none;
  `;

  const SmallLogoContainer = styled.div`
    ${({ isHomePage }: { isHomePage?: boolean }) =>
      isHomePage &&
      css`
        color: #fff;
      `}
  `;

  // const logoutHandler = async () => {
  //   // const data = {
  //   // 	userName: userAuthData.userName,
  //   // 	token: userAuthData.access_token,
  //   // }
  //   // const logoutResult = await logoutUser(data)
  //   // if (logoutResult === 200) {
  //   // 	logoutUserStore()
  //   // 	localStorage.clear()
  //   // 	history.push('/login')
  //   // }
  // };

  // const openMessageBoxHandler = (type: string) => {
  //   openPopoverMessage(true);
  //   setChangedMenuItem(type);
  // };

  const { pathname } = router;

  return (
    <MainContainer>
      <HeaderContent isHomePage={pathname === "/"}>
        {/* <CloseIconContainer
          onClick={
            openedDrawer.length < 1
              ? () => setOpenedDrawer("menu")
              : () => setOpenedDrawer("")
          }
          isHomePage={pathname === "/"}
        >
          <img src={closeIcon} alt={"close"} />
        </CloseIconContainer> */}
        {openedDrawer.length > 0 ? (
          <CloseIconContainer
            onClick={
              openedDrawer.length < 1
                ? () => setOpenedDrawer("menu")
                : () => setOpenedDrawer("")
            }
            isHomePage={pathname === "/"}
          >
            {/* <CloseIcon / */}
            <img src={close} alt={"close"} />
          </CloseIconContainer>
        ) : (
          <MenuBurgerContainer
            onClick={
              openedDrawer.length < 1
                ? () => setOpenedDrawer("menu")
                : () => setOpenedDrawer("")
            }
            isHomePage={pathname === "/"}
          >
            <img src={burger} alt={"close"} />
            {/* <MenuBurger /> */}
          </MenuBurgerContainer>
        )}
        <SmallLogoContainer isHomePage={pathname === "/"}>
          <SmallLogo href={"/"}>AIOPUS</SmallLogo>
        </SmallLogoContainer>
      </HeaderContent>
    </MainContainer>
  );
};

export default MobileMenu;
