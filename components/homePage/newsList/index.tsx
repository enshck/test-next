import React from "react";
import moment from "moment";

import {
  MainContainer,
  NewsElement,
  InfoContainer,
  ControlsContainer,
  HideButton,
  MoreButton,
  StyledLink,
} from "./styles";
import { IStory } from "../";
import arrowIcon from "common/assets/header/arrow.gif";

interface IProps {
  changedStories: {
    listTopStories: IStory[];
  };
  changedPage: number;
  setChangedPage: (page: number) => void;
}

const NewsList = ({ changedStories, changedPage, setChangedPage }: IProps) => {
  const { listTopStories } = changedStories;
  return (
    <MainContainer>
      {listTopStories.map((elem, key) => {
        const { by, id, score, title, url, time, rawId } = elem;
        const { id: userName } = by;

        return (
          <NewsElement key={id}>
            <InfoContainer>
              <p>{rawId}.</p>
              <img src={arrowIcon} alt={"arrow"} />
              <a href={url} target={"blanc"}>
                {title}
              </a>
            </InfoContainer>
            <ControlsContainer>
              <p>
                {score} points by {userName} {moment.unix(time).fromNow()}
              </p>
              <HideButton>hide</HideButton>
              {/* <StyledLink to={`/`}>{descendants} comments</StyledLink> */}
            </ControlsContainer>
          </NewsElement>
        );
      })}
      <MoreButton onClick={() => setChangedPage(changedPage + 1)}>
        More
      </MoreButton>
    </MainContainer>
  );
};

export default NewsList;
