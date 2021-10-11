import { styled } from "@stitchesConfig";
import { motion, Variants } from "framer-motion";
import { useState } from "react";

export const Navigation = () => {
  const [isActive, setIsActive] = useState(false);

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
    <>
      <Wrapper
        variants={navVariants}
        animate={isActive ? "open" : "close"}
        drag="y"
        dragConstraints={{ top: 0, bottom: 40 }}
        onClick={() => setIsActive((state) => !state)}
        style={{
          pointerEvents: "all",
        }}
      >
        <motion.div>
          <Flex
            style={{
              pointerEvents: "all",
            }}
          >
            <SvgContainer
              initial="open"
              variants={ArrowVarients}
              animate={isActive ? "open" : "close"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 24"
                width="100%"
                strokeWidth="5px"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <motion.path
                  d="M 2 12 L 16 7.00129 L 30 12" //animate value 7.00129
                  fill="transparent"
                  stroke="rgba(255, 255, 255, 1)" // animate color
                ></motion.path>
              </svg>
            </SvgContainer>
          </Flex>
        </motion.div>
      </Wrapper>
      <Overlay />
    </>
  );
};

const SvgContainer = styled(motion.div, {
  width: "calc(1.5 * 30px)",
});

const Overlay = styled(motion.div, {
  background: "rgba(0, 0, 0, 0.7)",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  // contain: "strict",
  // overflow: "hidden",
  willChange: "transform",
});

const Wrapper = styled(motion.div, {
  position: "fixed", //absolute
  bottom: "0",
  left: "0",
  height: "40%",
  width: "100%",
  zIndex: "10",
});

const Flex = styled(motion.div, {
  display: "flex",
  height: "calc(100vh)",
  borderRadius: "1rem",
  width: "100%",
  placeContent: "start center",
  placeItems: "start center",
  backgroundColor: "White",
});
