import { LightDarkSwitcher } from "@src/components/Button/ThemeToggle";
import { Logo } from "@src/components/Header/Logo";
import { styled } from "@stitchesConfig";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      <Logo />
      <LightDarkSwitcher />
    </div>
  );
};

export default Home;

const Text = styled("h1", {
  fontFamily: "Inter",
  fontWeight: "500",
});
