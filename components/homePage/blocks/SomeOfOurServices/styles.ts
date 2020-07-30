import styled from "styled-components";

export const MainContentContainer = styled.div``;

export const MainContainer = styled.div`
  padding-bottom: 125px;
  @media (max-width: 992px) {
    padding-bottom: 50px;
  }
`;

export const H2 = styled.h2`
  ${(props) => props.theme.textOptions}
  ${(props) => props.theme.h2}
	margin: 0;
  @media (max-width: 992px) {
    font-size: 20px !important;
  }
`;

export const H3 = styled.h3`
  ${(props) => props.theme.h3}
  font-size: 30px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  margin-top: 40px !important;
  letter-spacing: 5px;
  @media (max-width: 992px) {
    font-size: 25px;
  }
  @media (max-width: 850px) {
    font-size: 21px;
  }
  @media (max-width: 750px) {
    ${(props) => props.theme.textOptions}
    letter-spacing: normal;
    text-transform: capitalize;
    font-size: 18px !important;
    margin: 40px 0 0 0 !important;
    font-weight: 600;
  }
`;
export const P = styled.p`
  ${(props) => props.theme.textOptions}
  color: #fff;
  font-size: 20px;
  line-height: 30px;
  opacity: 1;
  margin-bottom: 0;
  @media (max-width: 992px) {
    font-size: 18px;
  }
  @media (max-width: 850px) {
    font-size: 16px;
  }
  @media (max-width: 750px) {
    ${(props) => props.theme.textOptions}
    font-size: 15px;
    line-height: 15px;
    margin: 18px 0 0 0 !important;
  }
`;
export const ArrowRight = styled.img`
  margin-top: 100px;
  cursor: pointer;
  margin-top: 100px;
  @media (max-width: 1400px) {
    margin-top: 0;
  }
  /* @media (max-width: 1200px) {
		margin-top: 100px;
	} */
  @media (max-width: 750px) {
    display: none;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 100px;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    width: 100%;
    grid-gap: 5px;
    margin-top: 60px;
  }

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
    width: 100%;
    margin-top: 0;
  }
`;
export const GridElementBlock = styled.div`
  ${(props) => props.theme.someOfOurServicesBlock}
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-sizing: border-box;
  padding: 40px;
  width: 100%;
  @media (max-width: 1400px) {
    justify-content: space-between;
  }
  /* @media (max-width: 1200px) {
		justify-content: flex-start;
	} */
  @media (max-width: 750px) {
    display: flex;
    justify-content: center;
    background: transparent;
    padding: 0;
  }
`;

export const GridElementBlockContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const GridElementPicture = styled.img`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  @media (max-width: 750px) {
    width: 286px;
    height: 286px;
  }
`;

export const GridElementBlockPicture = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  @media (max-width: 750px) {
    justify-content: center;
    margin-top: 40px;
  }
`;
