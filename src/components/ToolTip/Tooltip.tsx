import React, { useState } from "react";
import { styled, keyframes } from "@stitchesConfig";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

const slideUpAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideRightAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(-2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

const slideDownAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(-2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideLeftAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

const StyledContent = styled(TooltipPrimitive.Content, {
  borderRadius: 4,
  padding: "4px 10px",
  fontSize: 14,
  fontWeight: "500",
  display: "flex",
  placeItems: "center",
  lineHeight: 1,
  color: "$gray1",
  backgroundColor: "$gray15",
  boxShadow:
    "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  "@media (prefers-reduced-motion: no-preference)": {
    animationDuration: "400ms",
    animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
    willChange: "transform, opacity",
    '&[data-state="delayed-open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },
});

// Exports
export const ToolTip = TooltipPrimitive.Root;
export const TooltipTrigger = TooltipPrimitive.Trigger;
export const TooltipContent = StyledContent;

interface Props {
  tooltipText: string;
}

export const Tooltip: React.FC<Props> = ({ tooltipText, children }) => {
  return (
    <ToolTip delayDuration={100}>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <StyledContent sideOffset={8}>{tooltipText}</StyledContent>
    </ToolTip>
  );
};
