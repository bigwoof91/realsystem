import React, { forwardRef } from 'react';

import {
  AriakitPopover,
  AriakitPopoverArrow,
  AriakitPopoverProps,
} from '@real-system/ariakit-library';
import { Flex, FlexProps } from '@real-system/flex';
import { Icon } from '@real-system/icon';
import type { RealSystemElementProps } from '@real-system/utils-library';
import { makeTestId } from '@real-system/utils-library';

import { PopoverButton } from './PopoverButton';
import { PopoverContainer, usePopoverStateContext } from './PopoverContext';
import { PopoverDescription } from './PopoverDescription';
import { PopoverDismiss } from './PopoverDismiss';
import { PopoverHeading } from './PopoverHeading';

type PopoverProps = Omit<AriakitPopoverProps, 'state' | 'as'> &
  RealSystemElementProps & {
    hideCloseButton?: boolean;
    hideArrow?: boolean;
  };

const StyledPopover = forwardRef<HTMLDivElement, FlexProps>(
  function StyledPopover(props, ref) {
    return (
      <Flex
        maxWidth="45rem"
        {...props}
        vertical
        xAlignContent="left"
        yAlignContent="top"
        border="border-2"
        filter="popover"
        borderColor="gray-100"
        borderRadius={2}
        padding={10}
        _focus={{ outline: '0' }}
        bgColor="white"
        zIndex="popover"
        ref={ref}
      />
    );
  }
);

export interface PopoverComponent
  extends React.ForwardRefExoticComponent<PopoverProps> {
  Container: typeof PopoverContainer;
  Dismiss: typeof PopoverDismiss;
  Button: typeof PopoverButton;
  Heading: typeof PopoverHeading;
  Description: typeof PopoverDescription;
}

// @ts-expect-error Popover subcomponent properties are defined on the component object after this is defined
const Popover: PopoverComponent = forwardRef<HTMLDivElement, PopoverProps>(
  function Popover(
    {
      children,
      hideCloseButton,
      hideArrow = false,
      ...restProps
    }: PopoverProps,
    ref
  ) {
    const state = usePopoverStateContext();
    return (
      <AriakitPopover
        state={state}
        data-testid={makeTestId('popover')}
        {...restProps}
        as={StyledPopover}
        ref={ref}>
        {hideArrow ? null : <AriakitPopoverArrow state={state} />}
        {!hideCloseButton && (
          <PopoverDismiss
            variant="minimal"
            position="absolute"
            top={5}
            right={5}
            size="sm">
            <Icon icon="x" />
          </PopoverDismiss>
        )}
        {children}
      </AriakitPopover>
    );
  }
);

Popover.Button = PopoverButton;
Popover.Container = PopoverContainer;
Popover.Description = PopoverDescription;
Popover.Dismiss = PopoverDismiss;
Popover.Heading = PopoverHeading;

export type { PopoverProps };
export { Popover };
