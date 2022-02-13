import type { BoxProps } from '@real-system/box-primitive';
import type { ResponsiveValue } from '@real-system/styling-library';

export type DisplayOptions = 'flex' | 'inline-flex';
export type Display = ResponsiveValue<DisplayOptions>;
export type VerticalAlignOptions =
  | 'top'
  | 'center'
  | 'bottom'
  | 'stretch'
  | 'between'
  | 'around'
  | 'evenly';
export type VerticalAlign = ResponsiveValue<VerticalAlignOptions>;
export type HorizontalAlignOptions =
  | 'left'
  | 'center'
  | 'right'
  | 'around'
  | 'between'
  | 'evenly';
export type HorizontalAlign = ResponsiveValue<HorizontalAlignOptions>;
export type VerticalOptions = boolean;
export type Vertical = ResponsiveValue<VerticalOptions>;
export type GrowOptions = boolean | number;
export type Grow = ResponsiveValue<GrowOptions>;
export type ShrinkOptions = boolean | number;
export type Shrink = ResponsiveValue<ShrinkOptions>;
export type BasisOptions = string | number;
export type Basis = ResponsiveValue<BasisOptions>;
export type WrapOptions = boolean;
export type Wrap = ResponsiveValue<WrapOptions>;

type SomeBoxProps = Omit<BoxProps, 'display'>;
export type FlexProps = SomeBoxProps & {
  /**
   * renders children
   */
  children?: React.ReactNode;
  /**
   * display css property
   */
  display?: Display;
  /**
   * shorthand for `display: inline-flex` css property/value
   */
  inline?: boolean;
  /**
   * shorthand for flexDirection css property
   */
  vertical?: Vertical;
  /**
   * vertical alignment
   */
  yAlignContent?: VerticalAlign;
  /**
   * horizontal alignment
   */
  xAlignContent?: HorizontalAlign;
  /**
   * shorthand for `flexGrow` css property
   */
  grow?: Grow;
  /**
   * shorthand for `flexShrink` css property
   */
  shrink?: Shrink;
  /**
   * shorthand for `flexBasis` css property
   */
  basis?: Basis;
  /**
   * shorthand for `flexWrap` css property
   */
  wrap?: Wrap;
  /**
   * alias for `gap` css property
   */
  space?: BoxProps['gap'];
};
