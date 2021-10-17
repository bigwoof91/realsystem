import { Meta } from '@storybook/react/types-6-0';

import { Box } from '@realsystem/core/box';

export default {
  title: 'Primitives/Box',
  component: Box,
  args: {
    children: 'Box',
  },
} as Meta;

const Template = (args) => <Box {...args} />;

export const Default = Template.bind({});
