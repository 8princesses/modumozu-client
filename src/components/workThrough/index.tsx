"use client";

import { useEffect, useState } from "react";
import styled from "styled-components";
import colors from "@/styles/colors";
import { getFonts } from "@/styles/fonts";
import Button from "../common/Button";
import WorkThroughContent from "./WorkThroughContent";
import KakaoLoginButton from "./KakaoLoginButton";
import WorkThroughMain from "./WorkThroughMain";

const WorkThrough = () => {
  const [step, setStep] = useState(1);

  const handleNextStepClick = () => {
    setStep((step) => step + 1);
  };

  const renderPage = () => {
    switch (step) {
      case 1:
        return <WorkThroughMain />;
      case 2:
        return (
          <WorkThroughContent
            header={<Description>보유 계좌를 선택하면,</Description>}
            content={<img src="/images/step_1.png" width="100%" />}
          />
        );
      case 3:
        return (
          <WorkThroughContent
            header={
              <Description>
                내 계좌에 따라
                <br />
                <StrongText>청약 가능한 공모주</StrongText>를
                <br />한 눈에 알 수 있어요
              </Description>
            }
            content={<img src="/images/step_2.png" width="100%" />}
          />
        );
      case 4:
        return (
          <WorkThroughContent
            header={
              <Description>
                <StrongText>계좌 개설의 제약에 대해</StrongText>
                <br />
                필요한 그 때 바로
                <br />
                안내해드려요
              </Description>
            }
            content={<img src="/images/step_3.png" width="100%" />}
          />
        );
      default:
        return null;
    }
  };

  const handleKakaoClick = () => {
    window.location.href = "https://api.modumozu.com/oauth2/authorization/kakao";
  };

  return (
    <WorkThroughWrap>
      <ContentWrap>{renderPage()}</ContentWrap>
      <ButtonWrap>
        {step <= 3 ? (
          <>
            <Button width="100%" onClick={handleNextStepClick}>
              {step > 1 ? "다음" : "시작"}
            </Button>
            <Button width="100%" onClick={handleKakaoClick}>
              로그인
            </Button>
          </>
        ) : (
          <>
            <KakaoLoginButton onClick={handleKakaoClick} />
          </>
        )}
      </ButtonWrap>
    </WorkThroughWrap>
  );
};
export default WorkThrough;
const WorkThroughWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: calc(var(--var, 1vh) * 100);
  height: 1vh;
  background-color: ${colors.WHITE};
  overflow: hidden;
`;
const ContentWrap = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
const ButtonWrap = styled.div`
  gap: 8px 0;
  width: calc(100%);
  height: 100px;
  position: absolute;
  bottom: 20px;
  > * + * {
    margin-top: 8px;
  }
  padding: 0px 16px;
`;
const Description = styled.div`
  ${getFonts("H2_SEMIBOLD")}
  color:${colors.FONT_LIGHT.PRIMARY};
  padding: 20px;
  white-space: pre-wrap;
`;
const StrongText = styled.span`
  color: ${colors.FONT.PRIMARY};
`;
