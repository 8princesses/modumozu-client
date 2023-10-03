import { BottomSheetGuide } from "@/components/common/bottomSheet/BottomSheetGuide";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Common/BottomSheet/Guide",
  component: () => {
    return (
      <BottomSheetGuide title="최소 청약증거금">
        <p>
          공모주를 배정받기 위해 미리 내는 보증금이에요.
          <br />
          <span>공모가 x 최소 신청 물량(보통 10주) x 50%</span>에
          <br />
          해당 금액을 청약 전 계좌에 입금해야 해요.
          <br />
          <br />
          상장 후 배정받지 못한 주수만큼 환불 받아요.
        </p>
      </BottomSheetGuide>
    );
  },
  tags: ["autodocs"],
} satisfies Meta<typeof BottomSheetGuide>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
