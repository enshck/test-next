import { GetStaticProps } from "next";
import axios from "axios";

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

const About = ({ data }: IProps) => {
  return <div>{data}</div>;
};

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
