"use client";

import { Header } from "@/components/common/Header";
import colors from "@/styles/colors";
import React, { FC } from "react";
import styled from "styled-components";

interface LayoutProps {
  children: React.ReactNode;
}

const AccountLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <MainWrapper>
      <Header title="내 계좌" />
      <main>{children}</main>
    </MainWrapper>
  );
};

export default AccountLayout;

const MainWrapper = styled.div`
  background-color: ${colors.WHITE};
  height: 100vh;
`;
