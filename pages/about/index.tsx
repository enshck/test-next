import { useRouter } from "next/router";
import { GetStaticProps } from "next";
import styled from "styled-components";
import axios from "axios";

import { MainContainer } from "./styles";

interface IProps {
  data: string;
}

const getUserIp = () =>
  axios
    .get("https://api.ipify.org?format=json")
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.log(error);
    });

const About = ({ data }: IProps) => <MainContainer>{data}</MainContainer>;

export const getStaticProps: GetStaticProps = async (context) => {
  const result = await getUserIp();

  if (!result) {
    return {
      props: {},
    };
  }

  return {
    props: {
      data: result.ip,
    },
  };
};

export default About;
