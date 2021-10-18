import {createStitches} from '@stitches/react';
import {gray} from './colors';
import type * as Stitches from '@stitches/react';

const stitchesConfig = createStitches({
  theme: {
    colors: {
      ...gray,
      main: '#275EFE',
      mainHover: '#1D4FE1',
      bg: '#f9fafb',
      fg: '#f4f5f8',
      'typeface-pri': '#04052f',
      'typeface-sec': '#626b84',
      'typeface-ter': '#575f75',
    },
    fonts: {},
    fontWeights: {},
    shadows: {
      shadow1: '0 0px 10px -6px rgba(0, 24, 40, 0.3)',
      shadow2: '0 0px 15px -6px rgba(0, 24, 40, 0.4)',
      shadow3: '0 0px 20px -6px rgba(0, 24, 40, 0.5)',
    },
  },

  media: {
    dark: '(prefers-color-scheme: dark)',
    bp1: '(min-width: 420px)',
    bp2: '(min-width: 640px)',
    bp3: '(min-width: 768px)',
    bp4: '(min-width: 1024px)',
  },
  utils: {
    bc: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
      backgroundColor: value,
    }),
    px: (value: Stitches.PropertyValue<'padding'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.PropertyValue<'padding'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    marginX: (value: Stitches.PropertyValue<'margin'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    marginY: (value: Stitches.PropertyValue<'margin'>) => ({
      marginTop: value,
      marginBottom: value,
    }),
  },
});

export const {css, theme, styled, globalCss, getCssText, keyframes} =
  stitchesConfig;

export type CSS = Stitches.CSS<typeof stitchesConfig.config>;

export const DarkTheme = stitchesConfig.createTheme('dark', {
  colors: {
    main: '#275EFE',
    mainHover: '#1D4FE1',
    bg: '#16181d',
    fg: '#1a1d23',
    'typeface-pri': '#e8e8fd',
    'typeface-sec': '#98a0b3',
    'typeface-ter': '#c4c9d4',
  },

  shadows: {
    shadow1: '0 0px 20px -6px rgba(0, 0, 0, 0.7);',
    shadow2: '0 0px 25px -6px rgba(0, 0, 0, 0.8);',
    shadow3: '0 0px 30px -6px rgba(0, 0, 0, 0.9);',
  },
});
