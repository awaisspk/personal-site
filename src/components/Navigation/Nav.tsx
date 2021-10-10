import { styled } from "@stitchesConfig";
import { motion, useTransform, useAnimation, Variants } from "framer-motion";
import { useState } from "react";

export const Navigation = () => {
  const [toggle, setToggle] = useState(false);

  const navVariants: Variants = {
    open: {
      y: "0%",
    },
    close: {
      y: "100%",
    },
  };

  const ArrowVarients: Variants = {
    open: {
      y: "0%",
    },
    close: {
      y: "-80%",
    },
  };
  return (
    <BodyContainer>
      <NavContainer
        variants={navVariants}
        animate={toggle ? "close" : "open"}
        onClick={() => setToggle((state) => !state)}
      >
        <Flex>
          <SvgContainer
            initial="open"
            variants={ArrowVarients}
            animate={toggle ? "close" : "open"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 24"
              width="100%"
              strokeWidth="5px"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path
                d="M 2 12 L 16 7.00129 L 30 12" //animate value 7.00129
                fill="transparent"
                stroke="rgba(255, 255, 255, 1)" // animate color to pink
              ></path>
            </svg>
          </SvgContainer>
        </Flex>
      </NavContainer>
    </BodyContainer>
  );
};

const SvgContainer = styled(motion.div, {
  width: "calc(1.5 * 30px)",
});

const BodyContainer = styled("div", {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  contain: "strict",
  overflow: "hidden",
  willChange: "transform",
});

const NavContainer = styled(motion.div, {
  position: "absolute",
  bottom: "0",
  left: "0",
  height: "400px",
  width: "100%",
});

const Flex = styled("div", {
  display: "flex",
  height: "120%",
  width: "100%",
  borderRadius: "0.5rem",
  placeContent: "start center",
  placeItems: "start center",
  backgroundColor: "White",
});
