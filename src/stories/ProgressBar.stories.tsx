import ProgressBar from "@/components/common/ProgressBar";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Common/ProgressBar",
  component: ProgressBar,
  tags: ["autodocs"],
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    totalStep: 5,
    currentStep: 4,
  },
};
