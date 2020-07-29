import { useRouter } from "next/router";

import { MainContainer } from "./styles";

const About = ({ params }) => {
  const router = useRouter();
  const { pid } = router.query;

  return <MainContainer>{pid}</MainContainer>;
};

// export async function getStaticProps({ params }) {
//   return { props: { params } };
// }

export default About;
