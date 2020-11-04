import React from 'react';
import SeparatorList from '.';

const Template = (args) => <SeparatorList {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  separator: '✈️',
  items: ['New York', 'Paris', 'Schenectady', 'Los Angeles', 'Hong Kong'],
};

export const Pipes = Template.bind({});
Pipes.args = {
  separator: '|️',
  items: [
    <a key="some" className="type--link">
      Some
    </a>,
    <a key="footer" className="type--link">
      Footer
    </a>,
    <a key="links" className="type--link">
      Links
    </a>,
    <a key="or" className="type--link">
      Or
    </a>,
    <a key="something" className="type--link">
      Something
    </a>,
  ],
};

export const Breadcrumbs = Template.bind({});
Breadcrumbs.args = {
  separator: '/',
  items: [
    <a key="main" className="type--link">
      Main
    </a>,
    'Retail',
  ],
};

export default {
  component: SeparatorList,
  title: 'components/SeparatorList',
  parameters: {
    docs: {
      description: {
        component:
          'This layout component takes a list of strings or components and renders a `ul` with list items displayed `inline-block`. **This component allows items in the list to wrap**.',
      },
    },
  },
};
