import CheckBox from "@/components/common/CheckBox";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta = {
  title: "Common/CheckBox",
  component: (props) => {
    const [state, setState] = useState(false);

    const handleChangeState = () => {
      setState((prev) => !prev);
    };

    return <CheckBox onChange={handleChangeState} checked={state} {...props} />;
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      options: ["primary", "background"],
      control: { type: "radio" },
      description: "체크박스의 타입",
    },
  },
} satisfies Meta<typeof CheckBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: "primary",
  },
};
