import UpcomingStock from "@/components/home/UpcomingStock";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Home/UpcomingStock",
  component: UpcomingStock,
  parameters: {
    layout: "centered",
  },
  render: (props) => {
    return (
      <div style={{ width: "340px" }}>
        <UpcomingStock {...props} />
      </div>
    );
  },
  tags: ["autodocs"],
} satisfies Meta<typeof UpcomingStock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Type_A: Story = {
  args: {
    children: (
      <>
        <UpcomingStock.status startDate="2023-10-16" endDate="2023-10-17" />
        <UpcomingStock.cardWrap
          id={2}
          title="에이치엠씨아이비스팩6호"
          love={true}
          category="의료장비 및 서비스"
          account={[2]}
          nonRemainAccounts={[]}
          price={[26000, 31000]}
          cardType="A"
          proposalAgent={2}
          proposalEndDate="2023-10-10"
          onClick={() => {}}
        >
          안뇽
        </UpcomingStock.cardWrap>
      </>
    ),
  },
};

export const Type_B: Story = {
  args: {
    children: (
      <>
        <UpcomingStock.status startDate="2023-10-16" endDate="2023-10-17" />
        <UpcomingStock.cardWrap
          id={2}
          title="에이치엠씨아이비스팩6호"
          love={true}
          category="의료장비 및 서비스"
          account={[2]}
          nonRemainAccounts={[]}
          price={[26000, 31000]}
          cardType="B"
          proposalAgent={2}
          proposalEndDate="2023-10-10"
          onClick={() => {}}
        >
          안뇽
        </UpcomingStock.cardWrap>
      </>
    ),
  },
};

export const Type_C: Story = {
  args: {
    children: (
      <>
        <UpcomingStock.status startDate="2023-10-16" endDate="2023-10-17" />
        <UpcomingStock.cardWrap
          id={2}
          title="에이치엠씨아이비스팩6호"
          love={true}
          category="의료장비 및 서비스"
          account={[2]}
          nonRemainAccounts={[]}
          price={[26000, 31000]}
          cardType="C"
          proposalAgent={2}
          proposalEndDate="2023-10-10"
          onClick={() => {}}
        >
          안뇽
        </UpcomingStock.cardWrap>
      </>
    ),
  },
};

export const Type_D: Story = {
  args: {
    children: (
      <>
        <UpcomingStock.status startDate="2023-10-16" endDate="2023-10-17" />
        <UpcomingStock.cardWrap
          id={2}
          title="에이치엠씨아이비스팩6호"
          love={true}
          category="의료장비 및 서비스"
          account={[2]}
          nonRemainAccounts={[]}
          price={[26000, 31000]}
          cardType="D"
          proposalAgent={2}
          proposalEndDate="2023-10-10"
          onClick={() => {}}
        >
          안뇽
        </UpcomingStock.cardWrap>
      </>
    ),
  },
};
