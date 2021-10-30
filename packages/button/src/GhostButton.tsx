import React, { forwardRef } from 'react';

import { BoxStyleProps } from '@realsystem/box';
import { merge } from '@realsystem/utils';

import { baseStyles, BoxAsButton } from './styles';
import { ButtonIntents, ButtonStates, InternalButtonProps } from './types';

type ButtonStyles = Record<ButtonStates, BoxStyleProps>;

const defaultStyles: ButtonStyles = {
  default: merge(baseStyles.default, {
    color: 'color-text-brand',
    backgroundColor: 'color-background',
    _hover: {
      color: 'color-text-brand-strong',
      backgroundColor: 'color-background-brand-weakest',
    },
    _active: {
      color: 'color-text-brand-stronger',
      backgroundColor: 'color-background-brand-weaker',
    },
  }),
  loading: merge(baseStyles.loading, {
    color: 'color-text-brand-weaker',
    backgroundColor: 'color-background-brand-weakest',
  }),
  disabled: merge(baseStyles.disabled, {
    color: 'color-text-brand-weaker',
    backgroundColor: 'color-background-brand-weakest',
  }),
};

const dangerStyles: ButtonStyles = {
  default: merge(baseStyles.default, {
    color: 'color-text-danger',
    backgroundColor: 'color-background',
    _hover: {
      color: 'color-text-danger-strong',
      backgroundColor: 'color-background-danger-weakest',
    },
    _active: {
      color: 'color-text-danger-stronger',
      backgroundColor: 'color-background-danger-weaker',
    },
  }),
  loading: merge(baseStyles.loading, {
    color: 'color-text-danger-weaker',
    backgroundColor: 'color-background-danger-weakest',
  }),
  disabled: merge(baseStyles.disabled, {
    color: 'color-text-danger-weaker',
    backgroundColor: 'color-background-danger-weakest',
  }),
};

const neutralStyles: ButtonStyles = {
  default: merge(baseStyles.default, {
    color: 'color-text-neutral',
    backgroundColor: 'color-background',
    _hover: {
      color: 'color-text-neutral-strong',
      backgroundColor: 'color-background-neutral-weakest',
    },
    _active: {
      color: 'color-text-neutral-stronger',
      backgroundColor: 'color-background-neutral-weaker',
    },
  }),
  loading: merge(baseStyles.loading, {
    color: 'color-text-neutral-weaker',
    backgroundColor: 'color-background-neutral-weakest',
  }),
  disabled: merge(baseStyles.disabled, {
    color: 'color-text-neutral-weaker',
    backgroundColor: 'color-background-neutral-weakest',
  }),
};

const STYLE_MAP: {
  [key in ButtonIntents]: ButtonStyles;
} = {
  default: defaultStyles,
  danger: dangerStyles,
  neutral: neutralStyles,
};

const GhostButton = forwardRef<HTMLButtonElement, InternalButtonProps>(
  (
    { children, buttonState, intent = 'default', ...restProps },
    ref
  ): React.ReactElement => {
    return (
      <BoxAsButton {...STYLE_MAP[intent][buttonState]} {...restProps} ref={ref}>
        {children}
      </BoxAsButton>
    );
  }
);

GhostButton.displayName = 'GhostButton';

export { GhostButton };
