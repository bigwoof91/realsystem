import React, { forwardRef } from 'react';

import {
  AriakitSelect,
  AriakitSelectOptions,
} from '@real-system/ariakit-library';
import { boxAs, BoxStyleProps } from '@real-system/box-primitive';
import { StylishProps } from '@real-system/styling-library';
import { merge } from '@real-system/utils-library';

import { useSelectStateContext } from './SelectContext';
import { SelectPopover } from './SelectPopover';

const BoxAsSelect = boxAs<AriakitSelectOptions>(AriakitSelect);

const resetStyles = {
  bg: 'none',
  border: 'none',
};

const baseStyles: StylishProps = {
  ...resetStyles,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  height: 16,
  paddingX: 6,
  margin: 0,
  borderWidth: '1px',
  borderStyle: 'solid',
  borderRadius: 4,
  outline: 'none',
  boxShadow: 'none',
  bgColor: 'white',
  color: 'gray-500',
  cursor: 'text',
  fontSize: 1,
  fontWeight: 3,
  fontFamily: 'body',
  transition: 'box-shadow 150ms ease-in, border-color 150ms ease-in',
  _hover: {},
  _focusWithin: {},
  _active: { boxShadow: 'none' },
};

const selectStyles: Record<'default' | 'error', StylishProps> = {
  default: merge(baseStyles, {
    borderColor: 'gray-200',
    _hover: {
      borderColor: 'gray-300',
    },
    _focusWithin: {
      borderColor: 'gray-300',
      boxShadow: 'focus-outline',
    },
    _expanded: {
      borderColor: 'gray-300',
    },
    _disabled: {
      color: 'gray-300',
      bgColor: 'gray-50',
      borderColor: 'gray-200',
      cursor: 'default',
    },
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
};

type SelectProps = BoxStyleProps & { children?: React.ReactNode };

const Select = forwardRef<HTMLButtonElement, SelectProps>(function Select(
  { children, ...restProps },
  ref
) {
  const state = useSelectStateContext();
  const styles = state.error ? selectStyles['error'] : selectStyles['default'];

  return (
    <>
      <BoxAsSelect {...styles} state={state} ref={ref} {...restProps} />
      <SelectPopover>{children}</SelectPopover>
    </>
  );
});

export type { SelectProps };
export { Select };
