import { styled } from "@stitchesConfig";
import React from "react";

export const Layout: React.FC = ({ children }) => {
  return (
    <Wrapper>
      {/*Header*/}
      {children}
      {/*Footer*/}
    </Wrapper>
  );
};

const Wrapper = styled("main", {
  // background : ""
  transition: "0.5s",

  "&:focus:not(:focus-visible)": {
    outline: 0,
  },
  "&:focus-visible": {
    outline: "2px solid $colors$main",
    // backgroundColor : ''
  },
});
