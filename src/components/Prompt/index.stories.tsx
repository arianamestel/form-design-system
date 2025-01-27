import React from 'react';
import { NoStoriesLayout } from 'util/storybook-docs/Layout';
import { StoryObj } from '@storybook/react';
import Button from 'components/Button';
import Prompt, { PromptProps } from '.';

export const Primary: StoryObj<PromptProps> = {
  args: {
    isOpen: true,
    desc: 'This change will be permanent and cannot be undone.',
    title: 'Are you sure you want to delete this collection?',
    primaryButton: <Button isDestructive label="Delete" />,
    secondaryButton: <Button theme="ghost" label="Keep Collection" />,
  },
};

export const NoDescription: StoryObj<PromptProps> = {
  args: { ...Primary.args, desc: false },
};

export default {
  component: Prompt,
  title: 'Components/Prompt',
  argTypes: {
    onDismiss: {
      action: 'onDismiss',
    },
  },
  parameters: {
    componentSubtitle: 'An inflexible version of Dialog that is used for confirm modals.',
    docs: {
      fds: {
        related: ['Dialog'],
      },
      page: NoStoriesLayout,
      description: {
        component:
          'Displays a simple string message, with 2 buttons to either confirm the action, or deny it. **Please click "Canvas" to view examples**.',
      },
    },
  },
};
