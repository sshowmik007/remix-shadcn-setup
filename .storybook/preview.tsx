import React from 'react';
import "../app/tailwind.css";
import type { Preview } from "@storybook/react";
import * as DocBlocks from '@storybook/blocks';

const preview = {
  parameters: {
    layout: 'fullscreen',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'dark', // Set the default background color
      values: [
        { name: 'light', value: '#ffffff' }, // Light background
        { name: 'dark', value: '#3C1053' }, // Dark background
      ],
    },
    docs: {
      page: () => (
        <>
          <DocBlocks.Title />
          <DocBlocks.Description />
          <DocBlocks.Primary />
          <DocBlocks.Controls />
        </>
      ),
    },
  },
  tags: ['autodocs'],
};

export default preview;