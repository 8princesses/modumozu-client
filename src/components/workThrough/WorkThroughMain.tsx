"use client";

import colors from "@/styles/colors";
import { getFonts } from "@/styles/fonts";
import Image from "next/image";
import styled from "styled-components";

const Main = () => {
  return (
    <MainWrap>
      <MainContentWrap>
        <Image src="/images/logo_1.png" width={157} height={157} alt="logo" />
        <MainTitle>모두를 위한 공모주</MainTitle>
        <MainDescription>복잡한 신청 과정을 한 큐에! 누구나 쉽게 시작하는 공모주</MainDescription>
      </MainContentWrap>
    </MainWrap>
  );
};

export default Main;

const MainWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100% - 120px);
`;
const MainContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 220px;
`;
const MainTitle = styled.h1`
  margin-top: 20px;
  ${getFonts("H1_BOLD")}
  color:${colors.FONT_LIGHT.PRIMARY};
`;
const MainDescription = styled.div`
  margin-top: 8px;
  ${getFonts("H3_REGULAR")};
  color: ${colors.FONT_LIGHT.SECONDARY};
`;
