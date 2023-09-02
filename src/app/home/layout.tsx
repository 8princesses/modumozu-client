"use client";

import TopBar from "@/components/common/TopBar";
import React, { FC } from "react";
import { styled } from "styled-components";

interface LayoutProps {
  children: React.ReactNode;
}

const HomeLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <Container>
      <TopBar />
      <main>{children}</main>
    </Container>
  );
};

export default HomeLayout;

const Container = styled.div`
  width: 375px;
  margin: 0 auto;
`;
