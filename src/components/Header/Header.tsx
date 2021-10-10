import { styled } from "@stitchesConfig";
import { ToggleDarkTheme } from "../Button";
import Link from "next/link";
import { Logo } from "./Logo";

export const Header = () => {
  return (
    <Grid>
      <Flex>
        <Logo />
        <Nav>
          <Links>
            <li>
              <Link href="/" scroll={false}>
                <a>Home</a>
              </Link>
            </li>

            <li>
              <Link href="/blog" scroll={false}>
                <a>Blog</a>
              </Link>
            </li>

            <li>
              <Link href="/about" scroll={false}>
                <a>About</a>
              </Link>
            </li>
          </Links>
          <ToggleDarkTheme />
        </Nav>
      </Flex>
    </Grid>
  );
};

const Grid = styled("div", {
  display: "Grid",
  gridTemplateColumns: "10px 1fr 10px",
  maxWidth: "900",
  alignItems: "center",
  height: "inherit",
  "@bp1": {
    gridTemplateColumns: "1fr 4fr 1fr",
  },
});

const Flex = styled("header", {
  gridColumn: "2",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "inherit",
});

const Nav = styled("nav", {
  display: "flex",
  alignItems: "center",
  gap: "20px",
});

const Links = styled("ul", {
  listStyle: "none",
  display: "flex",

  "& a": {
    textDecoration: "none",
    color: "$typeface-pri",
    padding: "4px 10px",
    userSelect: "none",
  },
});
