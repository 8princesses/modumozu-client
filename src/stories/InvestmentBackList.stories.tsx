import InvestmentBankList from "@/components/common/bottomSheet/InvestmentBankList";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Common/BottomSheet/InvestmentBankList",
  component: () => {
    return (
      <InvestmentBankList
        stockName="시지트로닉스칠팔구"
        investmentBanks={[9, 11, 18, 3, 1, 10, 9, 14]}
        handleClose={() => {}}
        handleClick={() => {}}
      />
    );
  },
  tags: ["autodocs"],
} satisfies Meta<typeof InvestmentBankList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
