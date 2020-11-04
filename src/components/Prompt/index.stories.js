import React from 'react';
import { action } from '@storybook/addon-actions';
import ImportPath2 from 'util/storybook-docs/ImportPath2';
import Button from 'components/Button';

import {
  Title,
  Subtitle,
  Description,
  ArgsTable,
  PRIMARY_STORY,
} from '@storybook/addon-docs/blocks';

import Prompt from '.';

export const Primary = () => (
  <Prompt
    isOpen={true}
    desc="This change will be permanent and cannot be undone."
    title="Are you sure you want to delete this collection?"
    primaryButton={<Button isDestructive label="Delete" />}
    secondaryButton={
      <Button theme="ghost" label="Keep Collection" onClick={action('close modal')} />
    }
    onDismiss={action('close modal')}
  />
);

const Layout = () => (
  <>
    <Title />
    <ImportPath2 />
    <Subtitle />
    <Description />
    <ArgsTable story={PRIMARY_STORY} />
  </>
);

export default {
  component: Prompt,
  title: 'components/Prompt',
  parameters: {
    docs: {
      page: Layout,
      description: {
        component:
          'A confirm modal that displays a simple message, with 2 buttons to either confirm the action, or deny it. **Please click "Canvas" to view examples**.',
      },
    },
  },
};
