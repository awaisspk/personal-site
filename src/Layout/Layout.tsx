import { Header } from "@src/components/Header/Header";
import { styled } from "@stitchesConfig";
import React from "react";

export const Layout: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      {children}
      {/*Footer*/}
    </Wrapper>
  );
};

const Wrapper = styled("main", {});
