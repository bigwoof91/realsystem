import { ThemeShape } from '../themes/tokenizePalette';
import {
  backgroundColors,
  borderColors,
  borders,
  colors,
  filters,
  shadows,
  textColors,
} from '../tokens/paletteScales';
import {
  borderWidths,
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  radii,
  sizes,
  space,
  zIndices,
} from '../tokens/staticScales';

export type OrdinalTokens =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19;

// categorized token typings
export type ColorTokens = keyof ReturnType<typeof colors>;
export type BackgroundColorTokens = keyof ReturnType<typeof backgroundColors>;
export type TextColorTokens = keyof ReturnType<typeof textColors>;
export type BorderColorTokens = keyof ReturnType<typeof borderColors>;
export type BorderTokens = keyof ReturnType<typeof borders>;
export type BorderWidthTokens = keyof typeof borderWidths;
export type ShadowTokens = keyof ReturnType<typeof shadows>;
export type FontTokens = keyof typeof fonts;
export type FontSizeTokens = keyof typeof fontSizes;
export type FontWeightTokens = keyof typeof fontWeights;
export type LetterSpacingTokens = keyof typeof letterSpacings;
export type LineHeightTokens = keyof typeof lineHeights;
export type RadiiTokens = keyof typeof radii;
export type SpaceTokens = keyof typeof space;
export type SizeTokens = keyof typeof sizes;
export type ZIndexTokens = keyof typeof zIndices;
export type FilterTokens = keyof ReturnType<typeof filters>;

// all token typings
export type ThemeTokens =
  | BorderWidthTokens
  | FontTokens
  | FontSizeTokens
  | FontWeightTokens
  | LetterSpacingTokens
  | LineHeightTokens
  | RadiiTokens
  | SpaceTokens
  | SizeTokens
  | ZIndexTokens
  | ColorTokens
  | BackgroundColorTokens
  | TextColorTokens
  | BorderColorTokens
  | BorderTokens
  | ShadowTokens
  | OrdinalTokens
  | FilterTokens;

export type ThemeScales = keyof ThemeShape;
