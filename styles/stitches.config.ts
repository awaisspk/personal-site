import { createStitches } from "@stitches/react";
import { gray } from "./colors";

const stitchesConfig = createStitches({
  theme: {
    colors: {
      ...gray,

      main: "#0e52f1",
      bg: "#f9fafb",
      fg: "#f4f5f8",
      "typeface-pri": "#04052f",
      "typeface-sec": "#626b84",
      "typeface-ter": "#575f75",
    },
  },
  media: {
    dark: "(prefers-color-scheme: dark)",
  },
});

export const { css, theme, styled, globalCss, getCssText, keyframes } =
  stitchesConfig;

export const DarkTheme = stitchesConfig.createTheme("dark", {
  colors: {
    main: "#5686f5",
    bg: "#16181d",
    fg: "#1a1d23",
    "typeface-pri": "#e8e8fd",
    "typeface-sec": "#98a0b3",
    "typeface-ter": "#c4c9d4",
  },
});
