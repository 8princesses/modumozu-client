import KakaoLoginButton from "@/components/workThrough/KakaoLoginButton";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Common/KakaoLoginButton",
  component: KakaoLoginButton,
  tags: ["autodocs"],
} satisfies Meta<typeof KakaoLoginButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    onClick: () => {
      console.log("카카오 로그인으로~");
    },
  },
};
