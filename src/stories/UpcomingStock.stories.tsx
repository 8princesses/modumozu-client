import UpcomingStock from "@/components/home/UpcomingStock";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Home/UpcomingStock",
  component: UpcomingStock,
  parameters: {
    layout: "centered",
  },
  render: (props) => {
    return <UpcomingStock {...props} />;
  },
  tags: ["autodocs"],
} satisfies Meta<typeof UpcomingStock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: (
      <>
        <UpcomingStock.status status={true}>gd</UpcomingStock.status>
        <UpcomingStock.cardWrap
          title="에이치엠씨아이비스팩6호"
          love={true}
          category="의료장비 및 서비스"
          account="대신증권"
          price={[26000, 31000]}
          subscription="limit"
        >
          안뇽
        </UpcomingStock.cardWrap>
      </>
    ),
  },
};
