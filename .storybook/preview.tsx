import React from 'react';
import type { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';
import { ThemeProvider } from 'styled-components';
import { DefaultTheme } from '../src/styles/theme/defaultTheme'
import { GlobalStyled } from '../src/styles/global.styled'

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={DefaultTheme}>
        <GlobalStyled />
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'Acade',
      values: [
        {
          name: 'Acade',
          value: '#121214',
        },
        {
          name: 'light',
          value: '#fff',
        },
      ],
    },
  },
}

export const parameters = {
  darkMode: {
    // Override the default dark theme
    dark: { ...themes.dark, appBg: 'black' },
    // Override the default light theme
    light: { ...themes.normal, appBg: 'red' },
    // Set the initial theme
    current: 'dark',
  },
}

export default preview;
