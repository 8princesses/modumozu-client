"use client";

import colors from "@/styles/colors";
import { getFonts } from "@/styles/fonts";
import BackIcon from "@/svg/BackIcon";
import { useRouter } from "next/navigation";
import React from "react";
import styled from "styled-components";

interface HeaderProps {
  title?: string;
}

export const Header = ({ title }: HeaderProps) => {
  const router = useRouter();

  return (
    <HeaderWrapper>
      <button onClick={() => router.back()}>
        <BackIcon />
      </button>
      <h1>{title}</h1>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background: ${colors.WHITE};
  border-bottom: 1px solid ${colors.GRAY[1]};

  &::after {
    content: "";
    width: 24px;
  }

  h1 {
    ${getFonts("H4_SEMIBOLD")}
  }
`;
