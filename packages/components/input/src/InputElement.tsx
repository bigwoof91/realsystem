import React, { forwardRef } from 'react';

import { real } from '@real-system/elements-primitive';
import type { StylishProps } from '@real-system/styling-library';
import { spreadStyleProps } from '@real-system/styling-library';

import { InputProps } from './types';

const getCursor = ({
  disabled,
  readOnly,
  type,
}: InputProps): StylishProps['cursor'] => {
  if ((type === 'date' || type === 'time') && !readOnly && !disabled) {
    return 'text';
  }
  return 'auto';
};

const InputElement = forwardRef<HTMLInputElement, InputProps>(
  function InputElement(props, ref) {
    return (
      <real.input
        appearance="none"
        display="block"
        width="100%"
        height={16}
        paddingX={6}
        margin={0}
        fontFamily="inherit"
        fontSize={1}
        fontWeight={3}
        lineHeight={1}
        backgroundColor="transparent"
        border="none"
        borderRadius={4}
        boxShadow="none"
        color="inherit"
        cursor={getCursor(props)}
        outline="none"
        resize="none"
        ref={ref}
        _placeholder={{
          color: 'gray-200',
          transition: '150ms all ease-in',
        }}
        _hover_placeholder={{
          color: 'gray-300',
        }}
        _focus_placeholder={{
          color: 'gray-300',
        }}
        _focus={{ outline: 'none' }}
        _disabled={{ cursor: 'default' }}
        transition="0.25s all ease-out"
        aria-invalid={props['aria-invalid']}
        aria-readonly={props.readOnly}
        disabled={props.disabled}
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
        readOnly={props.readOnly}
        required={props.required}
        value={props.value}
        {...spreadStyleProps(props, {
          display: false,
          width: false,
          border: false,
          borderRadius: false,
          transition: false,
          bgColor: false,
          backgroundColor: false,
          color: false,
          borderColor: false,
          boxShadow: false,
          cursor: false,
          _hover: false,
          _focusWithin: false,
          _active: false,
        })}
      />
    );
  }
);

export { InputElement };
