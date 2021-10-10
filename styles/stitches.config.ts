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
    shadows: {
      shadow1: "0 0px 10px -6px rgba(0, 24, 40, 0.3)",
      shadow2: "0 0px 15px -6px rgba(0, 24, 40, 0.4)",
      shadow3: "0 0px 20px -6px rgba(0, 24, 40, 0.5)",
    },
  },

  media: {
    dark: "(prefers-color-scheme: dark)",
    bp1: "(min-width: 400px)",
    bp2: "(min-width: 640px)",
    bp3: "(min-width: 768px)",
    bp4: "(min-width: 1024px)",
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

  shadows: {
    shadow1: "0 0px 20px -6px rgba(0, 0, 0, 0.7);",
    shadow2: "0 0px 25px -6px rgba(0, 0, 0, 0.8);",
    shadow3: "0 0px 30px -6px rgba(0, 0, 0, 0.9);",
  },
});
