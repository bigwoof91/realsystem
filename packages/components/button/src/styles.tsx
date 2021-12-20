import { BoxStyleProps } from '@real-system/box';
import { buttonPrimitiveStyles } from '@real-system/button-primitive';
import { majorScale } from '@real-system/theme';
import { merge } from '@real-system/utils';

import { ButtonSizes, ButtonStates, ButtonVariants } from './types';

const ifNotFloating = (
  variant: ButtonVariants,
  value: number | string,
  ifElse?: number | string
) => (variant === 'floating' ? ifElse || 0 : value);

const getSizeStyles = (
  variant: ButtonVariants
): { [key in ButtonSizes]: BoxStyleProps } => ({
  large: {
    px: ifNotFloating(variant, 7),
    py: ifNotFloating(variant, 4),
    height: ifNotFloating(variant, majorScale(5), 2),
    lineHeight: ifNotFloating(variant, majorScale(5), 2),
    fontSize: 2,
  },
  medium: {
    px: ifNotFloating(variant, 6),
    py: ifNotFloating(variant, 3),
    height: ifNotFloating(variant, majorScale(4), 6),
    lineHeight: ifNotFloating(variant, majorScale(4), 6),
    fontSize: 1,
  },
  small: {
    px: ifNotFloating(variant, 5),
    py: ifNotFloating(variant, 3),
    height: ifNotFloating(variant, majorScale(3), 6),
    lineHeight: ifNotFloating(variant, majorScale(3), 6),
    fontSize: 1,
  },
});

const baseStyles: { [key in ButtonStates]: BoxStyleProps } = {
  default: merge(buttonPrimitiveStyles, {
    cursor: 'pointer',
  }),
  disabled: buttonPrimitiveStyles,
  loading: merge(buttonPrimitiveStyles, {
    _disabled: { cursor: 'wait' },
  }),
};

export { baseStyles, getSizeStyles };
