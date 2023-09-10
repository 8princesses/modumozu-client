import type { Meta, StoryObj } from "@storybook/react";

import Button from "@/components/common/Button";
import { within } from "@storybook/testing-library";

const meta = {
  title: "Common/Button",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    fill: {
      options: [true, false],
      control: { type: "radio" },
    },
  },
  render: (props) => {
    return <Button {...props} />;
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    color: "primary",
    fill: true,
    children: "버튼인데요",
    size: "large",
    shape: "rectangle",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = await canvas.findByRole("button");

    await button.click();
  },
};

export const Secondary: Story = {
  args: {
    color: "secondary",
    fill: true,
    children: "버튼",
    size: "large",
    shape: "rectangle",
  },
};
