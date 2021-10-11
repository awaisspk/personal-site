import { styled } from "@stitchesConfig";

const Blog = () => {
  return (
    <Container>
      <h1>Blog Page</h1>
    </Container>
  );
};

export default Blog;

const Container = styled("div", {
  display: "grid",
  gridTemplateColumns: "auto 1fr auto",
  paddingTop: "250px",
  "& *": {
    gridColumn: "2",
  },
});
