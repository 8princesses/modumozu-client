"use client";

import TopBar from "@/components/common/TopBar";
import colors from "@/styles/colors";
import { useRouter } from "next/navigation";
import React, { FC } from "react";
import { styled } from "styled-components";

interface LayoutProps {
  children: React.ReactNode;
}

const HomeLayout: FC<LayoutProps> = ({ children }) => {
  const router = useRouter();

  return (
    <Container>
      <TopBar
        handleHeartClick={() => router.push("/interesting-stock")}
        handlePersonClick={() => router.push("/mypage")}
      />
      <main>{children}</main>
    </Container>
  );
};

export default HomeLayout;

const Container = styled.div`
  background-color: ${colors.WHITE};
`;
