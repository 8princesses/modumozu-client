import type { Meta, StoryObj } from "@storybook/react";
import ScopeBar from "@/components/common/ScopeBar";

const meta = {
  title: "Common/ScopeBar",
  component: ScopeBar,
  tags: ["autodocs"],
} satisfies Meta<typeof ScopeBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ShowAvailableStocks: Story = {
  args: {
    isShowingAllStocks: false,
    availableStocksCount: 8,
    allStocksCount: 12,
  },
};

export const ShowAllStocks: Story = {
  args: {
    isShowingAllStocks: true,
    availableStocksCount: 8,
    allStocksCount: 12,
  },
};
