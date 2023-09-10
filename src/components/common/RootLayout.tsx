"use client";

import { FC, ReactNode, useEffect } from "react";
import styled from "styled-components";

interface RootLayoutStyleProps {
  children: ReactNode;
}

const RootLayoutStyle: FC<RootLayoutStyleProps> = ({ children }) => {
  useEffect(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);

  return <RootLayoutWrap>{children}</RootLayoutWrap>;
};

export default RootLayoutStyle;

const RootLayoutWrap = styled.div`
  min-height: calc(var(--var, 1vh) * 100);
  max-width: 375px;
  width: 100%;
  margin: 0 auto;
`;
