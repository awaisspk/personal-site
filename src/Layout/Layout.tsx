import { Header } from "@src/components/Header";
import { Navigation } from "@src/components/Navigation";
import { styled } from "@stitchesConfig";
import React from "react";

export const Layout: React.FC = ({ children }) => {
  return (
    <Wrapper>
      {/*Footer*/}
      <Navigation />
    </Wrapper>
  );
};

const Wrapper = styled("main", {});
