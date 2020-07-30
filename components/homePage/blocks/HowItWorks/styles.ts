import styled from "styled-components";
import { OrangeButton } from "common/styles";

export const Wrapper = styled.div`
  padding: 336px 0 125px 0;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1200px) {
    padding: 34px 0 48px 0;
    justify-content: center;
  }
`;

export const TextBlock = styled.div`
  max-width: 661px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media (max-width: 1200px) {
    max-width: 100%;
  }
`;

export const Text = styled.p`
  ${(props) => props.theme.textOptions}
  font-size: 22px;
  line-height: 33px;
  font-weight: 400;
  opacity: 1;
  @media (max-width: 992px) {
    font-size: 15px;
    line-height: 21px;
  }
`;

export const Title = styled.h2`
  ${(props) => props.theme.textOptions}
  ${(props) => props.theme.h2}
	@media (max-width: 992px) {
    font-size: 20px !important;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  @media (max-width: 1200px) {
    display: none;
  }
`;

const Images = styled.img`
  max-width: 100%;
`;

export const TopImage = styled(Images)`
  position: absolute;
  top: -217px;
  right: 0;
  z-index: 2;
  width: 450px;
  height: 450px;
  @media (max-width: 1500px) {
    width: 400px;
    height: 400px;
  }
`;

export const BackgroundImage = styled.div`
  width: 450px;
  height: 450px;
  box-sizing: border-box;
  position: relative;
  margin-right: 200px;
  img {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 1500px) {
    width: 400px;
    height: 400px;
  }
`;

export const ButtonsConatainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1200px) {
    flex-direction: row;
  }
`;

export const Button = styled(OrangeButton)`
  margin: 10px 0 0 0 !important;
  width: 290px;
  @media (max-width: 380px) {
    width: 240px;
    font-size: 12px;
  }
  @media (min-width: 1200px) {
    margin-right: 35px !important;
  }
`;

export const MobileButtonsContainer = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1200px) {
    display: flex;
    margin-top: 20px;
  }
`;

export const EmptyButton = styled.div`
  padding: 15px 25px;
  width: 270px;
  box-sizing: border-box;
  font-weight: 600;
  color: #fff;
  border: 3px solid ${(props) => props.theme.orangeColor};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  max-height: 50px;
  color: ${(props) => props.theme.orangeColor};
  margin-top: 25px;
  @media (max-width: 992px) {
    font-size: 15px;
  }
`;

export const FullButton = styled(EmptyButton)`
  background-color: ${(props) => props.theme.orangeColor};
  margin-top: 35px;
  color: #fff;
  max-width: 145px;
  @media (max-width: 1200px) {
    max-width: 100%;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  @media (max-width: 1200px) {
    display: none;
  }
`;

export const BlueRectangle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: #32a4fc;
  opacity: 0.4;
  width: 100%;
  height: 100%;
`;
