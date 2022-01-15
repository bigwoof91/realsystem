import React, { forwardRef } from 'react';

import {
  ButtonPrimitive,
  ButtonPrimitiveStyleProps,
} from '@real-system/button-primitive';
import { merge } from '@real-system/utils-library';

import { baseStyles } from './styles';
import { ButtonIntents, ButtonStates, InternalButtonProps } from './types';

type ButtonStyles = Record<ButtonStates, ButtonPrimitiveStyleProps>;

const primaryStyles: ButtonStyles = {
  default: merge(baseStyles.default, {
    color: 'color-text-brand',
    backgroundColor: 'transparent',
    _hover: {
      color: 'color-text-brand-strong-2',
      backgroundColor: 'color-background-brand-weak-9',
    },
    _active: {
      color: 'color-text-brand-strong-3',
      backgroundColor: 'color-background-brand-weak-8',
    },
  }),
  loading: merge(baseStyles.loading, {
    color: 'color-text-brand-weak-6',
    backgroundColor: 'color-background-brand-weak-9',
  }),
  disabled: merge(baseStyles.disabled, {
    color: 'color-text-brand-weak-6',
    backgroundColor: 'color-background-brand-weak-9',
  }),
};

const dangerStyles: ButtonStyles = {
  default: merge(baseStyles.default, {
    color: 'color-text-danger-weak-05',
    backgroundColor: 'transparent',
    _hover: {
      color: 'color-text-danger-strong-1',
      backgroundColor: 'color-background-danger-weak-9',
    },
    _active: {
      color: 'color-text-danger-strong-5',
      backgroundColor: 'color-background-danger-weak-8',
    },
  }),
  loading: merge(baseStyles.loading, {
    color: 'color-text-danger-weak-6',
    backgroundColor: 'color-background-danger-weak-9',
  }),
  disabled: merge(baseStyles.disabled, {
    color: 'color-text-danger-weak-6',
    backgroundColor: 'color-background-danger-weak-9',
  }),
};

const successStyles: ButtonStyles = {
  default: merge(baseStyles.default, {
    color: 'color-text-success-weak-05',
    backgroundColor: 'transparent',
    _hover: {
      color: 'color-text-success-strong-1',
      backgroundColor: 'color-background-success-weak-9',
    },
    _active: {
      color: 'color-text-success-strong-5',
      backgroundColor: 'color-background-success-weak-8',
    },
  }),
  loading: merge(baseStyles.loading, {
    color: 'color-text-success-weak-6',
    backgroundColor: 'color-background-success-weak-9',
  }),
  disabled: merge(baseStyles.disabled, {
    color: 'color-text-success-weak-6',
    backgroundColor: 'color-background-success-weak-9',
  }),
};

const neutralStyles: ButtonStyles = {
  default: merge(baseStyles.default, {
    color: 'color-text-neutral-weak-05',
    backgroundColor: 'transparent',
    _hover: {
      color: 'color-text-neutral-strong-1',
      backgroundColor: 'color-background-neutral-weak-9',
    },
    _active: {
      color: 'color-text-neutral-strong-5',
      backgroundColor: 'color-background-neutral-weak-8',
    },
  }),
  loading: merge(baseStyles.loading, {
    color: 'color-text-neutral-weak-6',
    backgroundColor: 'color-background-neutral-weak-9',
  }),
  disabled: merge(baseStyles.disabled, {
    color: 'color-text-neutral-weak-6',
    backgroundColor: 'color-background-neutral-weak-9',
  }),
};

const STYLE_MAP: {
  [key in ButtonIntents]: ButtonStyles;
} = {
  neutral: neutralStyles,
  primary: primaryStyles,
  danger: dangerStyles,
  success: successStyles,
};

const MinimalButton = forwardRef<HTMLButtonElement, InternalButtonProps>(
  (
    { children, buttonState, intent = 'neutral', ...restProps },
    ref
  ): React.ReactElement => {
    return (
      <ButtonPrimitive
        {...STYLE_MAP[intent][buttonState]}
        {...restProps}
        ref={ref}>
        {children}
      </ButtonPrimitive>
    );
  }
);

MinimalButton.displayName = 'MinimalButton';

export { MinimalButton };
