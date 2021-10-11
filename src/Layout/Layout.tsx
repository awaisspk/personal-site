import { Header } from "@src/components/Header";
import { Navigation } from "@src/components/Navigation";
import { MobileNav } from "@src/components/Navigation/MobileNav";
import { styled } from "@stitchesConfig";
import React from "react";

export const Layout: React.FC = ({ children }) => {
  return (
    <Wrapper>
      {/*Footer*/}
      <Header />
      {children}
      <MobileNav />
    </Wrapper>
  );
};

const Wrapper = styled("main", {});
