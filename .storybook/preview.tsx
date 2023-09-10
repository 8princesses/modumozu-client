import type { Preview } from "@storybook/react";
import React from "react";
import GlobalStyle from "../src/styles/GlobalCss";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport/preview";
import "../src/styles/fonts/font.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: "iphone12",
    },
  },

  decorators: [
    (Story) => (
      <>
        <GlobalStyle />
        <Story />
      </>
    ),
  ],
};

export default preview;
