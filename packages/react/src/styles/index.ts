import { createStitches, defaultThemeMap } from '@stitches/react'
import {
  colors,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  space,
} from '@ignite-ui/tokens'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  createTheme,
  theme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    width: 'space',
    height: 'space',
  },
  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    space,
  },
})