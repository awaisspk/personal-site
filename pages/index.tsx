import { styled } from "@stitchesConfig";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Container>
      <h1>Home page</h1>
      <p>
        llorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
        ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
        ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
        ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
        ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
        ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
        ipsumlorem ipsumlorem ipsumlorem ipsumorem ipsum
      </p>
    </Container>
  );
};

export default Home;

const Container = styled("div", {
  display: "grid",
  gridTemplateColumns: "auto 700px auto",
  paddingTop: "250px",
  "& *": {
    gridColumn: "2",
  },
});
