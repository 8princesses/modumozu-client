"use client";

import { Header } from "@/components/common/Header";
import colors from "@/styles/colors";
import React, { FC } from "react";
import styled from "styled-components";

interface LayoutProps {
  children: React.ReactNode;
}

const MyLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <MainWrapper>
      <Header />
      <main>{children}</main>
    </MainWrapper>
  );
};

export default MyLayout;

const MainWrapper = styled.div`
  background-color: ${colors.WHITE};
  height: 100vh;
`;
