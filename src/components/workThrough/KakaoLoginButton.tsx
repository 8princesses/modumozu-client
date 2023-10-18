"use client";

import colors from "@/styles/colors";
import { getFonts } from "@/styles/fonts";
import KakaoLoginIcon from "@/svg/KakaoLoginIcon";
import { FC } from "react";
import styled from "styled-components";

interface KakaoLoginButtonProps {
  onClick: () => void;
}

const KakaoLoginButton: FC<KakaoLoginButtonProps> = ({ onClick }) => {
  return (
    <KakaoLoginButtonWrap onClick={onClick}>
      <KakaoLoginIcon />
      <span>카카오로 간편 로그인</span>
    </KakaoLoginButtonWrap>
  );
};

export default KakaoLoginButton;

const KakaoLoginButtonWrap = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 6px 0;
  background-color: #fee500;
  border-radius: 26px;
  color: ${colors.FONT_LIGHT.PRIMARY};
  ${getFonts("BUTTON1_BOLD")}
`;
