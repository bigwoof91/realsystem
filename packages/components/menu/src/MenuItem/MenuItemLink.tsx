import React, { forwardRef } from 'react';

import { AriakitMenuItem } from '@real-system/ariakit-library';
import { Box } from '@real-system/box-primitive';
import { Icon } from '@real-system/icon';
import { EXTERNAL_LINK_PROPS } from '@real-system/link';
import { StylishProps } from '@real-system/styling-library';
import { makeTestId } from '@real-system/utils-library';

import { menuItemStyles } from './MenuItem';
import { CommonMenuItemProps } from './MenuItem.types';

type MenuItemLinkProps = {
  href: string;
  external?: boolean;
  showExternal?: boolean;
} & CommonMenuItemProps<'a'>;

const menuLinkStyles: StylishProps = {
  ...menuItemStyles,
  color: 'blue-500',
  textDecoration: 'none',
  _hover: {
    ...menuItemStyles._hover,
    color: 'blue-600',
    textDecoration: 'underline',
  },
  _focus: {
    ...menuItemStyles._hover,
    outline: 'none',
    color: 'blue-600',
    textDecoration: 'underline',
  },
  _active: {
    ...menuItemStyles._active,
    color: 'blue-700',
    textDecoration: 'underline',
  },
};

const BoxMenuItemLink = forwardRef<HTMLAnchorElement, MenuItemLinkProps>(
  function BoxMenuItem({ children, ...restProps }, ref) {
    return (
      <Box {...menuLinkStyles} {...restProps} as="a" ref={ref}>
        {children}
      </Box>
    );
  }
);

const MenuItemLink = forwardRef<HTMLAnchorElement, MenuItemLinkProps>(
  function MenuLink(
    { children, href, external = false, showExternal = false, ...restProps },
    ref
  ) {
    const externalLinkProps = external ? EXTERNAL_LINK_PROPS : {};
    return (
      <AriakitMenuItem
        {...externalLinkProps}
        data-testid={makeTestId('menu-item-link')}
        {...restProps}
        as={BoxMenuItemLink}
        href={href}
        ref={ref}>
        {children}
        {showExternal ? (
          <Icon
            icon="external-link"
            size="sm"
            display="inline-block"
            verticalAlign="text-bottom"
            marginLeft={2}
          />
        ) : null}
      </AriakitMenuItem>
    );
  }
);

export type { MenuItemLinkProps };
export { MenuItemLink };