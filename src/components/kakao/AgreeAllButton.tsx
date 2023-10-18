"use client";

import styled from "styled-components";
import CheckBox from "../common/CheckBox";
import colors from "@/styles/colors";
import { getFonts } from "@/styles/fonts";
import { FC } from "react";

interface AgreeAllButtonProps {
  onClick: () => void;
  checked: boolean;
}

const AgreeAllButton: FC<AgreeAllButtonProps> = ({ onClick, checked }) => {
  return (
    <AgreeAllButtonWrap>
      <CheckBox type="background" checked={checked} onClick={onClick} />
      전체 동의
    </AgreeAllButtonWrap>
  );
};

export default AgreeAllButton;
const AgreeAllButtonWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  width: 100%;
  border: 1px solid ${colors.GRAY[2]};
  border-radius: 12px;
  ${getFonts("H4_SEMIBOLD")}
  color:${colors.FONT_LIGHT.PRIMARY};
`;
