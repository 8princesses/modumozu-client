import Badge from "@/components/common/Badge";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Common/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    children: "보유",
    type: "primary",
  },
};
