import {
  MainContainer,
  LinksContainer,
  LogoContainer,
  Links,
  StyledLinkContainer,
  StyledLink,
  StyledHref,
} from "./styles";
const logoImage = require("common/assets/header/y18.gif");
import { headerMenuLinks } from "common/constants";

const Header = () => {
  return (
    <MainContainer>
      <LinksContainer>
        <LogoContainer>
          <img src={logoImage} alt={"logo"} />
        </LogoContainer>
        <h2>Hacker News</h2>
        <Links>
          {headerMenuLinks.map((elem, key) => (
            <StyledLinkContainer isVisibleBorder={true} key={key}>
              <StyledLink href={"/"}>
                <StyledHref>{elem}</StyledHref>
              </StyledLink>
            </StyledLinkContainer>
          ))}
        </Links>
      </LinksContainer>
      <StyledLinkContainer>
        <StyledLink href={"/"}>
          <StyledHref>login</StyledHref>
        </StyledLink>
      </StyledLinkContainer>
    </MainContainer>
  );
};

export default Header;
