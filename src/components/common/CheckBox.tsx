"use client";

import CheckIcon from "@/svg/CheckIcon";
import { FC, InputHTMLAttributes } from "react";
import styled from "styled-components";

interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * 체크, 배경이 있는 체크
   */
  type?: "primary" | "background";
}

const CheckBox: FC<CheckBoxProps> = (props) => {
  const { type = "primary", checked, ...rest } = props;

  const renderIcon = () => {
    if (type === "primary") {
      if (checked) {
        return <CheckIcon type="primary" />;
      }
      return <CheckIcon type="secondary" />;
    }
    if (checked) {
      return <CheckIcon.background type="primary" />;
    }
    return <CheckIcon.background type="secondary" />;
  };
  return (
    <CheckBoxWrap>
      <input {...rest} type="checkbox" />
      {renderIcon()}
    </CheckBoxWrap>
  );
};

export default CheckBox;

const CheckBoxWrap = styled.label`
  display: flex;
  align-items: center;
  input {
    display: none;
  }
  svg {
    cursor: pointer;
  }
`;
