"use client";

import colors from "@/styles/colors";
import { getFonts } from "@/styles/fonts";
import CaretIcon from "@/svg/CaretIcon";
import { FC } from "react";
import styled from "styled-components";
import CheckBox from "../common/CheckBox";

interface TermProps {
  title: string;
  link: string;
  checked: boolean;
  onCheckClick: () => void;
}

const Term: FC<TermProps> = ({ title, link, checked, onCheckClick }) => {
  const handleShowDetailClick = () => {};

  return (
    <TermWrap>
      <TermTitleWrap>
        <CheckBox checked={checked} onClick={onCheckClick} />
        <span>{title}</span>
      </TermTitleWrap>
      <TermDetailButton onClick={handleShowDetailClick} />
    </TermWrap>
  );
};

export default Term;

const TermWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const TermTitleWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 0 12px;
  ${getFonts("H5_REGULAR")}
  color:${colors.FONT_LIGHT.PRIMARY};
`;
const TermDetailButton = styled(CaretIcon.right)`
  cursor: pointer;
`;
