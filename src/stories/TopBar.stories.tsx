import TopBar from "@/components/common/TopBar";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Common/TopBar",
  component: TopBar,
  tags: ["autodocs"],
} satisfies Meta<typeof TopBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
