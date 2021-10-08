import { ThemeToggle } from "@src/components/Button/ThemeToggle";
import { styled } from "@stitchesConfig";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      <Text>My personal site</Text>
      <ThemeToggle />
    </div>
  );
};

export default Home;

const Text = styled("h1", {
  fontFamily: "Inter",
  fontWeight: "500",
});
