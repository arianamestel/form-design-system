import { StoryObj } from '@storybook/react';
import DropdownButton, { DropdownButtonProps } from '.';

export const Primary: StoryObj<DropdownButtonProps> = {
  args: {
    children: 'Dropdown Button',
  },
};

export default {
  component: DropdownButton,
  title: 'Components/DropdownButton',
  parameters: {
    docs: {
      fds: {
        attributes: ['rest'],
      },
    },
  },
};
