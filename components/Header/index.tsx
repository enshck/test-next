import React, { useState, useEffect, Fragment, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

import {
  MenuContainer,
  Button,
  HeaderLink,
  MainContainer,
  Toolbar,
  AppBar,
  HomePageHeaderLink,
} from "./styles";
import { setChangedLanguage } from "store/actions";
import MobileMenu from "./mobileMenu";
import { useSelector } from "customHooks/useSelector";
const ButtonBackIcon = require("assets/pages/login/backButton.svg");
// import AttentionSignUpModal from '../Modals/attentionSignup'

const menuItems = [
  { name: "Home", link: "/" },
  { name: "Login", link: "/login" },
  { name: "Registration", link: "/registration" },
];

const HeaderTemplate = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const changedLanguage = useSelector((state) => state.changedLanguage);
  const [screenWidth, setScreenWidth] = useState(0);
  const [isOpenPopoverMessage, openPopoverMessage] = useState<boolean>(false);
  const [isOpenPostAJobModal, setOpenPostAJobModal] = useState<boolean>(false);
  const [changedMenuItem, setChangedMenuItem] = useState<string>(
    "notifications"
  );
  const messageRef = useRef(null);
  const [notifications] = useState([]);
  const [messages] = useState([]);

  const resizeHandler = () => setScreenWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    setScreenWidth(window.innerWidth);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  const { pathname } = router;

  return (
    <Fragment>
      <AppBar>
        <Toolbar>
          <MainContainer>
            <MenuContainer>
              {screenWidth <= 1200 ? (
                <MobileMenu
                  items={menuItems}
                  openPopoverMessage={openPopoverMessage}
                  setChangedMenuItem={setChangedMenuItem}
                />
              ) : (
                <Fragment>
                  <HomePageHeaderLink>
                    <HeaderLink href={"/"}>AIOPUS</HeaderLink>
                  </HomePageHeaderLink>
                  {menuItems.map((element, index) => (
                    <Link key={index} href={element.link}>
                      <Button isSelected={element.link === pathname}>
                        {element.name}
                      </Button>
                    </Link>
                  ))}
                </Fragment>
              )}
            </MenuContainer>
            {screenWidth > 1200 && (
              <MenuContainer>
                <Button
                  isChangedLanguage={
                    !changedLanguage || changedLanguage === "en"
                  }
                  isLanguageButton
                  onClick={() => dispatch(setChangedLanguage("en"))}
                >
                  En
                </Button>
                <span>|</span>
                <Button
                  isChangedLanguage={changedLanguage === "sw"}
                  isLanguageButton
                  onClick={() => dispatch(setChangedLanguage("sw"))}
                >
                  Sv
                </Button>
              </MenuContainer>
            )}
          </MainContainer>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

const Header = HeaderTemplate;

export default Header;
