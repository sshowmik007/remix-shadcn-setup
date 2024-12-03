import type { Meta, StoryObj } from '@storybook/react';
import { NavBar } from './nav-bar';
import { BrowserRouter } from 'react-router-dom';

const meta = {
  title: 'Dashboard/NavBar',
  component: NavBar,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};