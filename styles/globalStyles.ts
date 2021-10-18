import {globalCss} from '@stitchesConfig';
import {opinionated} from 'stitches-normalize-css';

// @ts-ignore
export const globalStyles = globalCss(...opinionated, {
  '*': {margin: '0', padding: '0'},
  body: {
    backgroundColor: '$bg',
    transition: '0.5s',
    fontFamily: 'Inter',
    color: '$typeface-pri',
  },
  main: {},

  '&:focus:not(:focus-visible)': {
    outline: 0,
  },
  '&:focus-visible': {
    outline: '2px solid $colors$main',
  },
  '::selection': {
    backgroundColor: '#1c2230',
    color: '$typeface-sec',
  },
  '@font-face': [
    {
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: '100 900',
      fontDisplay: 'optional',
      src: 'url("/fonts/inter-var-latin.woff2") format("woff2")',
      unicodeRange:
        'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,U+FEFF, U+FFFD',
    },
    {
      fontFamily: 'Fira Code',
      fontStyle: 'normal',
      fontWeight: '100 900',
      fontDisplay: 'optional',
      src: 'url("/fonts/fira-code.woff2") format("woff2")',
      unicodeRange:
        'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,U+FEFF, U+FFFD',
    },
  ],
});

// when it feels scary to jump in.That's exactly the moment you jump otherwise you
// end up staying in the same  place your whole life
