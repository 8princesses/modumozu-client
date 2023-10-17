import EndedStock from "@/components/home/EndedStock";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Home/EndedStock",
  component: EndedStock,
  tags: ["autodocs"],
} satisfies Meta<typeof EndedStock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BeforePublic: Story = {
  args: {
    stockName: "시큐레터",
    logoPath: "",
    openDate: new Date("2029-08-30"),
  },
};

export const LongName: Story = {
  args: {
    stockName: "큐리옥스바이오시스템템",
    logoPath: "",
    openDate: new Date("2023-08-15"),
  },
};

export const Done: Story = {
  args: {
    stockName: "스마트레이더시스템",
    logoPath: "",
    openDate: new Date("2023-08-15"),
  },
};
