import { useState } from "react";
import { useQuery } from "@apollo/client";

import { MainContainer, ListContainer } from "./styles";
import { GET_LIST_TOP_STORIES } from "apollo/requests";
import Header from "components/Header";
import Footer from "components/Footer";
import NewsList from "./newsList";
import Spinner from "components/spinner";

export interface IStory {
  by: {
    id: string;
    __typename: string;
  };
  id: number;
  score: number;
  time: number;
  title: string;
  url: string;
  rawId: number;
}

const HomePage = () => {
  const [changedPage, setChangedPage] = useState(1);
  const { data, loading } = useQuery(GET_LIST_TOP_STORIES, {
    variables: {
      page: changedPage,
    },
  });

  return (
    <MainContainer>
      <Header />
      <ListContainer>
        {loading ? (
          <Spinner />
        ) : (
          <NewsList
            changedStories={data}
            changedPage={changedPage}
            setChangedPage={setChangedPage}
          />
        )}
      </ListContainer>
      <Footer />
    </MainContainer>
  );
};

export default HomePage;
