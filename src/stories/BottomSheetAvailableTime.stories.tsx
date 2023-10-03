import { BottomSheetAvaillabeTime } from "@/components/common/bottomSheet/BottomSheetAvailableTime";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Common/BottomSheet/AvailableTime",
  component: () => {
    return <BottomSheetAvaillabeTime></BottomSheetAvaillabeTime>;
  },
  tags: ["autodocs"],
} satisfies Meta<typeof BottomSheetAvaillabeTime>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
