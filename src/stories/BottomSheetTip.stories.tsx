import { BottomSheetTip } from "@/components/common/bottomSheet/BottomSheetTip";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Common/BottomSheet/Tip",
  component: () => {
    return <BottomSheetTip investmentBankName="KB증권" handleButtonClick={() => {}} handleClose={() => {}} />;
  },
  tags: ["autodocs"],
} satisfies Meta<typeof BottomSheetTip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
