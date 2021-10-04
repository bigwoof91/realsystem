import React from 'react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withPerformance } from 'storybook-addon-performance';
import { THEMES, ThemeProvider } from '@realsystem/styling';

export const globalTypes = {
  theme: {
    name: 'Real System Theme',
    description: 'Global theme for components',
    defaultValue: 'default',
    toolbar: {
      // All available icons
      // https://github.com/storybookjs/storybook/blob/master/lib/components/src/icon/icons.tsx
      icon: 'paintbrush',
      // array of plain string values or MenuItem shape (see below)
      items: ['default'],
    },
  },
};

const GlobalStyles = () => (
  <StylingGlobals
    styles={{
      body: {
        padding: '0 !important',
      },
    }}
  />
);

export const decorators = [
  (Story, context) => {
    const theme = THEMES[context.globals.theme || 'default'];

    return (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    );
  },
  withPerformance,
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
};
