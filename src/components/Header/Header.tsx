import { styled } from "@stitches/react";
import { useEffect, useState } from "react";

export const Header = () => {
  const [windowDimention, setWindowDimention] = useState<number>(1024);

  useEffect(() => {
    const handleResize = () => {
      setWindowDimention(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowDimention <= 450;

  return (
    <Container>
      {isMobile ? (
        <div>Mobile navigation</div>
      ) : (
        <Navbar.Wrapper>
          <Navbar.Logo>Awais.</Navbar.Logo>
          <Navbar.Items>
            <Navbar.Item>Home</Navbar.Item>
            <Navbar.Item>Blog</Navbar.Item>
            <Navbar.Item>About</Navbar.Item>
          </Navbar.Items>
        </Navbar.Wrapper>
      )}
    </Container>
  );
};

const Container = styled("div", {
  display: "flex",
  backgroundColor: "#eeeeee",
  height: "100vh",
});

const StyledWrapper = styled("nav", {
  flex: "1",
  alignSelf: "flex-start",
  padding: "1rem 3rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "white",
});

const StyledLogo = styled("h3", {
  border: "1px solid gray",
  padding: "0.5rem 1rem",
});

const styledItems = styled("ul", {
  display: "flex",
  listStyle: "none",
});

const styledItem = styled("li", {
  padding: "0 1rem",
  cursor: "pointer",
});

const Navbar = {
  Wrapper: StyledWrapper,
  Items: styledItems,
  Item: styledItem,
  Logo: StyledLogo,
};
