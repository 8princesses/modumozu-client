import InvestmentBankList from "@/components/common/bottomSheet/InvestmentBankList";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Common/BottomSheet/InvestmentBankList",
  component: () => {
    return (
      <InvestmentBankList
        stockName="시지트로닉스칠팔구"
        investmentBanks={[
          "NH투자증권",
          "한화투자증권",
          "현대차증권",
          "유안타증권",
          "KB증권",
          "SK증권",
          "NH투자증권",
          "IBK투자증권",
        ]}
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
