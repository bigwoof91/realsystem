import type { AnimationProps } from './animation';
import { animationProps } from './animation';
import type { BackgroundProps } from './background';
import { backgroundProps } from './background';
import type { BorderProps } from './border';
import { borderProps } from './border';
import type { ColorProps } from './color';
import { colorProps } from './color';
import type { EffectProps } from './effect';
import { effectProps } from './effect';
import type { InteractivityProps } from './interactivity';
import { interactivityProps } from './interactivity';
import type { LayoutProps } from './layout';
import { layoutProps } from './layout';
import type { MiscellaneousProps } from './miscellaneous';
import { miscellaneousProps } from './miscellaneous';
import type { SpaceProps } from './space';
import { spaceProps } from './space';
import type { TransformProps } from './transform';
import { transformProps } from './transform';
import type { TypographyProps } from './typography';
import { typographyProps } from './typography';

const styleProps = {
  ...animationProps,
  ...backgroundProps,
  ...borderProps,
  ...colorProps,
  ...effectProps,
  ...interactivityProps,
  ...layoutProps,
  ...miscellaneousProps,
  ...spaceProps,
  ...transformProps,
  ...typographyProps,
};

type StyleProps = AnimationProps &
  BackgroundProps &
  BorderProps &
  ColorProps &
  EffectProps &
  InteractivityProps &
  LayoutProps &
  MiscellaneousProps &
  SpaceProps &
  TransformProps &
  TypographyProps;

export { styleProps };
export type {
  AnimationProps,
  BackgroundProps,
  BorderProps,
  ColorProps,
  EffectProps,
  InteractivityProps,
  LayoutProps,
  MiscellaneousProps,
  SpaceProps,
  StyleProps,
  TransformProps,
  TypographyProps,
};
