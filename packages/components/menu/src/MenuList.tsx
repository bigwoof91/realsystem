import React, { forwardRef } from 'react';

import { AriakitMenu } from '@real-system/ariakit-library';
import { Box } from '@real-system/box-primitive';
import styled from '@real-system/styling-library';
import { makeTestId } from '@real-system/utils-library';

import { useMenuStateContext } from './MenuContext';
import type { CommonMenuProps } from './types';

const StyledBox = styled(Box)({
  py: 3,
  zIndex: 'dropdown',
  backgroundColor: 'white',
  boxShadow: 'menu',
  borderRadius: 4,
  width: '15rem',
  minWidth: '15rem',
  maxWidth: '22rem',
  outline: 'none',
});

type MenuListProps = {
  children: React.ReactNode;
} & CommonMenuProps;

const MenuList = forwardRef<HTMLDivElement, MenuListProps>(function MenuList(
  { children, ...restProps },
  ref
) {
  const state = useMenuStateContext();
  return (
    <AriakitMenu
      as={StyledBox}
      state={state}
      data-testid={makeTestId('menu-list')}
      {...restProps}
      ref={ref}>
      {children}
    </AriakitMenu>
  );
});

export type { MenuListProps };
export { MenuList };
