"use client";

import colors from "@/styles/colors";
import { FC } from "react";
import styled from "styled-components";

interface ProgressBarProps {
  /**
   * 총 스텝의 수
   */
  totalStep: number;

  /**
   * 현재 스텝
   */
  currentStep: number;
}

const ProgressBar: FC<ProgressBarProps> = ({ totalStep, currentStep }) => {
  return (
    <ProgressWrap>
      <Progress percent={currentStep === 0 ? 0 : (currentStep / totalStep) * 100} />
    </ProgressWrap>
  );
};

export default ProgressBar;

const ProgressWrap = styled.div`
  height: 3px;
  background-color: ${colors.GRAY[2]};
  overflow: hidden;
`;

const Progress = styled.div<{ percent: number }>`
  translate: -${({ percent }) => 100 - percent}%;
  height: 100%;
  background-color: ${colors.BLUE[5]};
`;
