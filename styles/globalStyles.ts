import { globalCss } from "@stitchesConfig";
import { opinionated } from "stitches-normalize-css";

//@ts-ignore
export const globalStyles = globalCss(...opinionated, {
  body: {
    backgroundColor: "$bg",
  },
  "@font-face": [
    {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: "100 900",
      fontDisplay: "optional",
      src: 'url("/fonts/inter-var-latin.woff2") format("woff2")',
      unicodeRange:
        "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,U+FEFF, U+FFFD",
    },
    {
      fontFamily: "Fira Code",
      fontStyle: "normal",
      fontWeight: "100 900",
      fontDisplay: "optional",
      src: 'url("/fonts/fira-code.woff2") format("woff2")',
      unicodeRange:
        "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,U+FEFF, U+FFFD",
    },
  ],
});
