import type { Meta, StoryObj } from '@storybook/react';
import { StatCard } from './stat-card';
import { Users } from 'lucide-react';

const meta = {
  title: 'Dashboard/StatCard',
  component: StatCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof StatCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Total Users',
    value: '1,234',
    icon: <Users className="h-6 w-6" />,
    description: '+12% from last month',
  },
};