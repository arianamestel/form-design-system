import React from 'react';
import Content from './MenuContent';
import Item from './MenuItem';
import Trigger from './MenuTrigger';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export type MenuProps = Omit<DropdownMenu.DropdownMenuProps, 'dir'>;

const Menu = ({ children, modal = true, ...rest }: MenuProps): JSX.Element => {
  return (
    <DropdownMenu.Root {...rest} modal={modal} dir={'ltr'}>
      {children}
    </DropdownMenu.Root>
  );
};

Menu.Content = Content;
Menu.Item = Item;
Menu.Trigger = Trigger;

export default Menu;
