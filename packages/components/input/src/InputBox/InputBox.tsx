import React from 'react';

import { Box, BoxStyleProps } from '@real-system/box-primitive';
import type { RealSystemElementProps } from '@real-system/utils-library';
import { makeTestId, merge } from '@real-system/utils-library';

import { Addon, AddonProps } from './Addon';

export type InputBoxTypes =
  | 'text'
  | 'email'
  | 'hidden'
  | 'number'
  | 'password'
  | 'search'
  | 'tel'
  | 'date'
  | 'time';

export type InputBoxProps = {
  children: NonNullable<React.ReactNode>;
  disabled?: boolean;
  error?: boolean;
  readOnly?: boolean;
  type?: InputBoxTypes;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  addonProps?: Omit<AddonProps, 'children'>;
} & RealSystemElementProps;

type InputBoxStates = 'readonly' | 'hidden' | 'disabled' | 'default' | 'error';

const baseStyles: BoxStyleProps = {
  display: 'flex',
  width: '100%',
  border: '1px solid',
  borderRadius: 2,
  transition: 'box-shadow 150ms ease-in, border-color 150ms ease-in',
  bgColor: 'white',
  cursor: 'text',
  outline: 'none',
  boxShadow: 'none',
};

const styles: { [key in InputBoxStates]: BoxStyleProps } = {
  default: merge(baseStyles, {
    color: 'gray-500',
    borderColor: 'gray-300',
    _hover: {
      borderColor: 'gray-400',
    },
    _focusWithin: {
      borderColor: 'gray-400',
      boxShadow: 'focus-outline',
    },
    _active: {
      borderColor: 'gray-400',
      boxShadow: 'none',
    },
  }),
  disabled: merge(baseStyles, {
    color: 'gray-300',
    bgColor: 'gray-50',
    borderColor: 'gray-200',
    cursor: 'not-allowed',
  }),
  readonly: merge(baseStyles, {
    color: 'gray-300',
    bgColor: 'gray-50',
    borderColor: 'gray-200',
    _hover: { borderColor: 'gray-300' },
    _focusWithin: {
      boxShadow: 'focus-outline',
      borderColor: 'gray-300',
    },
    _active: { borderColor: 'gray-300' },
  }),
  error: merge(baseStyles, {
    borderColor: 'red-500',
    _hover: { borderColor: 'red-600' },
    _focusWithin: {
      boxShadow: 'focus-outline',
      borderColor: 'red-600',
    },
    _active: { borderColor: 'red-600' },
  }),
  hidden: merge(baseStyles, {
    bgColor: 'none',
    border: 0,
    _hover: { border: 0 },
    _focusWithin: {
      boxShadow: 'none',
      border: 0,
    },
    _active: { border: 0 },
  }),
};

const InputBox = React.forwardRef<HTMLDivElement, InputBoxProps>(
  (
    {
      disabled,
      error = false,
      readOnly,
      children,
      type,
      suffix,
      prefix,
      addonProps,
      ...restProps
    },
    ref
  ) => {
    const isHidden = type === 'hidden';
    const isDisabled = disabled && !isHidden;
    const isDanger = error && !isHidden;
    const isReadOnly = readOnly && !isHidden;
    let state: InputBoxStates = 'default';

    if (isDisabled) {
      state = 'disabled';
    } else if (isDanger) {
      state = 'error';
    } else if (isReadOnly) {
      state = 'readonly';
    } else if (isHidden) {
      state = 'hidden';
    }

    return (
      <Box
        ref={ref}
        {...styles[state]}
        height="100%"
        data-testid={makeTestId('input-box')}
        {...restProps}>
        {prefix && (
          <Addon disabled={disabled} {...addonProps}>
            {prefix}
          </Addon>
        )}
        {children}
        {suffix && (
          <Addon disabled={disabled} {...addonProps} isSuffix>
            {suffix}
          </Addon>
        )}
      </Box>
    );
  }
);

InputBox.displayName = 'InputBox';

export { InputBox };
