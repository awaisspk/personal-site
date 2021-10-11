import { styled } from "@stitchesConfig";
import { motion, Variants } from "framer-motion";
import { useState } from "react";
import { navLinks, socialLinks } from "@src/data";
import Link from "next/link";

export const MobileNav = () => {
  const [isActive, setIsActive] = useState(false);

  const ArrowVarients: Variants = {
    open: {
      y: "100%",
      d: "M 2 12 L 16 7.00129 L 30 12",
    },
    close: {
      y: "-80%",
      d: "M 2 12 L 16 12.00129 L 30 12",
    },
  };

  const pathVarients: Variants = {
    arrow: {
      d: "M 2 12 L 16 7.00129 L 30 12",
      stroke: "rgba(255, 255, 255, 1)", // animate color
    },
    line: {
      d: "M 2 12 L 16 12.00129 L 30 12",
      stroke: "rgba(0, 0, 255, 1)", // animate color
    },
  };

  return (
    <>
      <Wrapper
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={{ top: 0, bottom: 0.3 }}
        onDragEnd={(_, info) => {
          if (info.offset.y > 10) setIsActive(false);
        }}
        style={{
          pointerEvents: isActive ? "all" : "none",
        }}
      >
        <motion.div
          initial={{ y: "95%" }}
          animate={{ opacity: 1, y: isActive ? 0 : "95%" }}
          style={{
            pointerEvents: "all",
            height: "100%",
          }}
        >
          <SvgContainer
            initial="close"
            variants={ArrowVarients}
            animate={isActive ? "open" : "close"}
            onClick={() => setIsActive(true)}
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
                fill="transparent"
                animate={isActive ? "line" : "arrow"}
                variants={pathVarients}
              ></motion.path>
            </svg>
          </SvgContainer>
          <Navigation>
            {navLinks.map((link, index) => (
              <Link href={link.route}>
                <a onClick={() => setIsActive(false)} key={index}>
                  {link.name}
                </a>
              </Link>
            ))}
            {socialLinks.map((link, index) => (
              <a href={link.route} key={index}>
                {link.name}
              </a>
            ))}
          </Navigation>
        </motion.div>
      </Wrapper>
      <Overlay
        style={{
          pointerEvents: isActive ? "all" : "none",
        }}
        onClick={() => setIsActive(false)}
        animate={{ opacity: isActive ? 1 : 0 }}
      />
    </>
  );
};

const SvgContainer = styled(motion.div, {
  width: "calc(1.5 * 30px)",
  margin: "auto",
});

const Navigation = styled(motion.nav, {
  height: "100%",
  padding: "2em",
  background: "white",
  borderRadius: "1rem",
  display: "grid",
  gridTemplateRows: "1fr 1fr",
  gridTemplateColumns: "1fr 1fr 1fr",
  placeItems: "center",
  placeContent: "center",
});

const Wrapper = styled(motion.div, {
  position: "fixed",
  width: "100%",
  height: "50%",
  bottom: 0,
  left: 0,
  zIndex: 11,
});

const Overlay = styled(motion.div, {
  position: "fixed",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  background: "rgba(0, 0, 0, 0.7)",
  zIndex: 10,
});
