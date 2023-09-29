"use client";

import { Header } from "@/components/common/Header";
import colors from "@/styles/colors";
import React, { FC } from "react";
import styled from "styled-components";

interface LayoutProps {
  children: React.ReactNode;
}

const InterestingStockLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <MainWrapper>
      <Header title="나의 관심 공모주" />
      <main>{children}</main>
    </MainWrapper>
  );
};

export default InterestingStockLayout;

const MainWrapper = styled.div`
  background-color: ${colors.WHITE};
  height: 100vh;
`;
