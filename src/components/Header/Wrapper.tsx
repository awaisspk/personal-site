import useProgress from "@src/hooks/useProgress";
import { motion } from "framer-motion";
import useScrollCount from "@src/hooks/useScrollCount";
import { styled, css } from "@stitchesConfig";
import { Header } from "@components/Header/Header";

export const Wrapper: React.FC = (props) => {
  const shouldCollapse = useScrollCount(150);

  const variants = {
    open: {
      height: 120,
    },
    collapsed: (shouldCollapse: boolean) => ({
      height: shouldCollapse ? 70 : 120,
    }),
  };
  return (
    <Container
      css={{
        boxShadow: shouldCollapse ? "$shadow1" : "0",
      }}
    >
      <HeaderWrapper
        initial="open"
        animate="collapsed"
        variants={variants}
        custom={shouldCollapse}
        transition={{ ease: "easeInOut", duration: 0.5 }}
      >
        <Header />
      </HeaderWrapper>
    </Container>
  );
};

const HeaderWrapper = styled(motion.div, {
  transition: "background 0.5s",
  height: "inherit",
  gridColumn: "2",
  backgroundColor: "$bg",
});

const Container = styled("div", {
  position: "fixed",
  width: "100%",
  zIndex: "999",
  opacity: "0.88",

  variants: {
    color: {
      blue: {
        backgroundColor: "$bg",
      },
    },
  },
});
