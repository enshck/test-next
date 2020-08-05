import { gql } from "@apollo/client";

export type FilterKey = "name" | "calories" | "fat" | "carbs" | "protein";

export const GET_LIST_TOP_STORIES = gql`
  query listTopStories($page: Int!) {
    listTopStories(page: $page) {
      id
      time
      url
      score
      title
      rawId
      by {
        id
      }
    }
  }
`;
