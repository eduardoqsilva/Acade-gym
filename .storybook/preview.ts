import type { Preview } from "@storybook/react";
import { themes } from '@storybook/theming';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { createGlobalStyle } from 'styled-components';
import { DefaultTheme } from '../src/styles/theme/defaultTheme'

const {colors, font} = DefaultTheme

const GlobalStyles = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: ${font.default};
    color: ${colors.gray7};
    background-color: ${colors.gray1};
  }
`;

const preview: Preview = {
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
};

export const parameters = {
  darkMode: {
    // Override the default dark theme
    dark: { ...themes.dark, appBg: 'black' },
    // Override the default light theme
    light: { ...themes.normal, appBg: 'red' },
    // Set the initial theme
    current: 'dark',
  },
};

export const decorators = [
  withThemeFromJSXProvider({
    GlobalStyles, // Adds your GlobalStyle component to all stories
  }),
];

export default preview;
