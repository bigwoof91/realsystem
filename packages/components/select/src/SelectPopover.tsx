import React from 'react';

import { Box } from '@real-system/box-primitive';
import type { SelectPopoverPrimitiveProps } from '@real-system/select-primitive';
import { SelectPopoverPrimitive } from '@real-system/select-primitive';

import { useSelectStateContext } from './SelectContext';
import { OmitSelectPrivateProps } from './types';

type SelectPopoverProps = OmitSelectPrivateProps<SelectPopoverPrimitiveProps>;

/**
 * @todo animate popover
 */
const SelectPopover = ({ children, ...restProps }: SelectPopoverProps) => {
  const state = useSelectStateContext();

  return (
    <SelectPopoverPrimitive
      as={Box}
      zIndex="popover"
      display="flex"
      maxHeight="20rem"
      flexDirection="column"
      borderRadius={4}
      border="weak"
      bgColor="white"
      py={3}
      color="white"
      filter="popover"
      outline="none"
      overflow="auto"
      {...restProps}
      state={state}>
      {children}
    </SelectPopoverPrimitive>
  );
};

export type { SelectPopoverProps };
export { SelectPopover };
