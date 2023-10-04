import Modal from "@/components/common/Modal";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Common/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OneButton: Story = {
  args: {
    title: "모두모주 탈퇴가 완료되었습니다.",
    buttonText: "다음에 또 올게요",
  },
};

export const TwoButton: Story = {
  args: {
    title: "탈퇴하시겠습니까?",
    content: "탈퇴 시 모든 정보는\n삭제되며 복구는 불가능합니다.\n정말 탈퇴하시겠습니까?",
    buttonText: ["더 써볼래요.", "탈퇴할게요"],
  },
};
